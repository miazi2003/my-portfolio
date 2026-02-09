import React from "react";
import { Link, useParams } from "react-router";
import { blogsData } from "../../data/blogsData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="min-h-screen bg-black text-white px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
     
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-bold hover:bg-zinc-200 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition mb-10"
        >
          ← Back to Home
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 rounded-full">
              {blog.tag}
            </span>
            <span className="text-xs text-zinc-500 font-mono">{blog.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {blog.title}
          </h1>

          <p className="text-zinc-400">{blog.summary}</p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-6 md:p-8">
          <p className="text-xs text-zinc-500 font-mono mb-6">
            {blog.coverText}
          </p>

          <div className="space-y-5">
            {blog.content.map((para, idx) => (
              <p key={idx} className="text-zinc-200 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
