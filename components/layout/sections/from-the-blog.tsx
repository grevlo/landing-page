import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const FromTheBlogSection = () => {
  const posts = getAllPosts().slice(0, 2);

  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          From the blog
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-gray-200 bg-white p-6 hover:border-[#1E3A8A] transition-colors"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <h3 className="text-lg font-semibold text-[#1E3A8A] group-hover:underline leading-snug mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
