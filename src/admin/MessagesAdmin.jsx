import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosSecure } from "../api/axios";

const MessagesAdmin = () => {
  const queryClient = useQueryClient();
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/messages");
      return res.data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => axiosSecure.delete(`/messages/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-messages"] }),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contact Messages</h1>
      {isLoading && <p className="text-zinc-400">Loading messages...</p>}
      {isError && <p className="text-red-300">Failed to load messages.</p>}
      <div className="space-y-4">
        {data.map((message) => (
          <article key={message._id} className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">{message.title}</h2>
                <p className="text-sm text-zinc-500 mt-1">
                  {message.name} - {message.email}
                </p>
              </div>
              <button
                onClick={() => deleteMutation.mutate(message._id)}
                className="bg-red-500/20 text-red-200 px-4 py-2 rounded-lg text-sm"
              >
                Delete
              </button>
            </div>
            <p className="text-zinc-300 mt-5 whitespace-pre-wrap">{message.message}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MessagesAdmin;
