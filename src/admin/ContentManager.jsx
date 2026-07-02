import React, { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosSecure } from "../api/axios";

const parseValue = (field, value) => {
  if (field.type === "array") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  if (field.type === "boolean") return Boolean(value);
  if (field.type === "number") return Number(value);
  return value;
};

const stringifyValue = (field, value) => {
  if (field.type === "array") return Array.isArray(value) ? value.join("\n") : "";
  if (field.type === "boolean") return Boolean(value);
  return value ?? "";
};

const getInitialForm = (fields) =>
  fields.reduce((form, field) => {
    form[field.name] = field.defaultValue ?? (field.type === "boolean" ? false : "");
    return form;
  }, {});

const ContentManager = ({ title, endpoint, fields, enableReorder = false }) => {
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(() => getInitialForm(fields));

  const queryKey = useMemo(() => [`admin-${endpoint}`], [endpoint]);

  const { data = [], isLoading, isError } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await axiosSecure.get(`/${endpoint}/admin`);
      return res.data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      if (editing?._id) {
        const res = await axiosSecure.patch(`/${endpoint}/${editing._id}`, payload);
        return res.data;
      }
      const res = await axiosSecure.post(`/${endpoint}`, payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setEditing(null);
      setForm(getInitialForm(fields));
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosSecure.delete(`/${endpoint}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  const reorderMutation = useMutation({
    mutationFn: (items) => axiosSecure.patch(`/${endpoint}/reorder/list`, { items }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  const handleEdit = (item) => {
    setEditing(item);
    setForm(
      fields.reduce((nextForm, field) => {
        nextForm[field.name] = stringifyValue(field, item[field.name]);
        return nextForm;
      }, {})
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = fields.reduce((nextPayload, field) => {
      nextPayload[field.name] = parseValue(field, form[field.name]);
      return nextPayload;
    }, {});

    saveMutation.mutate(payload);
  };

  const moveSkill = (index, direction) => {
    const next = [...data];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= next.length) return;

    [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
    reorderMutation.mutate(next.map((item, itemIndex) => ({ _id: item._id, order: itemIndex + 1 })));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-zinc-500 text-sm mt-2">Create, update, and delete portfolio content.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 grid md:grid-cols-2 gap-4">
        {fields.map((field) => (
          <label key={field.name} className={field.type === "array" || field.wide ? "md:col-span-2" : ""}>
            <span className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">{field.label}</span>
            {field.type === "array" || field.type === "textarea" ? (
              <textarea
                rows={field.type === "array" ? 4 : 3}
                value={form[field.name] ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
                placeholder={field.placeholder}
              />
            ) : field.type === "boolean" ? (
              <input
                type="checkbox"
                checked={Boolean(form[field.name])}
                onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.checked }))}
                className="h-5 w-5"
              />
            ) : (
              <input
                type={field.type || "text"}
                value={form[field.name] ?? ""}
                onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
                placeholder={field.placeholder}
              />
            )}
          </label>
        ))}
        <div className="md:col-span-2 flex gap-3">
          <button type="submit" className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-zinc-200">
            {editing ? "Update" : "Create"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setForm(getInitialForm(fields));
              }}
              className="bg-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-700"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {isLoading && <p className="text-zinc-400">Loading...</p>}
      {isError && <p className="text-red-300">Failed to load {title.toLowerCase()}.</p>}

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item._id} className="bg-zinc-900/40 border border-white/10 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
            <div>
              <h3 className="font-bold">{item.name || item.title || item.institution || item.company || item.email}</h3>
              <p className="text-sm text-zinc-500 line-clamp-2">{item.description || item.summary || item.role || item.category}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {enableReorder && (
                <>
                  <button onClick={() => moveSkill(index, -1)} className="px-3 py-2 bg-zinc-800 rounded-lg text-sm">Up</button>
                  <button onClick={() => moveSkill(index, 1)} className="px-3 py-2 bg-zinc-800 rounded-lg text-sm">Down</button>
                </>
              )}
              <button onClick={() => handleEdit(item)} className="px-3 py-2 bg-white text-black rounded-lg text-sm font-bold">Edit</button>
              <button onClick={() => deleteMutation.mutate(item._id)} className="px-3 py-2 bg-red-500/20 text-red-200 rounded-lg text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentManager;
