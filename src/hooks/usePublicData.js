import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

const fetchList = async (endpoint) => {
  const { data } = await api.get(endpoint);
  if (!Array.isArray(data)) {
    throw new Error(`Expected array from ${endpoint}, got: ${typeof data}`);
  }
  return data;
};

const fetchItem = async (endpoint, id) => {
  const { data } = await api.get(`${endpoint}/${id}`);
  if (!data || typeof data !== "object") {
    throw new Error(`Expected object from ${endpoint}/${id}, got: ${typeof data}`);
  }
  return data;
};

export const useSkills = () =>
  useQuery({
    queryKey: ["skills"],
    queryFn: () => fetchList("/skills"),
  });

export const useEducation = () =>
  useQuery({
    queryKey: ["education"],
    queryFn: () => fetchList("/education"),
  });

export const useExperience = () =>
  useQuery({
    queryKey: ["experience"],
    queryFn: () => fetchList("/experience"),
  });

export const useProjects = () =>
  useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchList("/projects"),
  });

export const useProject = (id) =>
  useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchItem("/projects", id),
    enabled: Boolean(id),
  });

export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetchList("/blogs"),
  });

export const useBlog = (id) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchItem("/blogs", id),
    enabled: Boolean(id),
  });
