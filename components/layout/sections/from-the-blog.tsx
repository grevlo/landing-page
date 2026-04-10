import Link from "next/link";

export const FromTheBlogSection = () => {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          From the blog
        </p>
        <Link
          href="/blog/agencyanalytics-vs-dashthis-vs-swydo"
          className="group block rounded-xl border border-gray-200 bg-white p-6 hover:border-[#1E3A8A] transition-colors"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          <h3 className="text-lg font-semibold text-[#1E3A8A] group-hover:underline leading-snug mb-2">
            AgencyAnalytics vs DashThis vs Swydo: The Real Cost for UK Agencies in 2026
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            A direct comparison of the three dominant agency reporting platforms — their pricing models, limitations, and the hidden costs most agencies don&apos;t calculate.
          </p>
        </Link>
      </div>
    </section>
  );
};
