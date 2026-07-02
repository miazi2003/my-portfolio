import React from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../api/axios";

const DashboardHome = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/stats");
      return res.data;
    },
  });

  const cards = [
    { label: "Total Projects", value: data?.totalProjects ?? 0 },
    { label: "Total Blogs", value: data?.totalBlogs ?? 0 },
    { label: "Total Messages", value: data?.totalMessages ?? 0 },
    { label: "Total Skills", value: data?.totalSkills ?? 0 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      {isLoading && <p className="text-zinc-400">Loading overview...</p>}
      {isError && <p className="text-red-300">Failed to load overview.</p>}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div key={card.label} className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6">
            <p className="text-zinc-500 text-sm">{card.label}</p>
            <h2 className="text-4xl font-bold mt-3">{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
