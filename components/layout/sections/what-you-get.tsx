export const WhatYouGetSection = () => {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-14">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">
          What you get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/8 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#1E3A8A] mb-1">PageSpeed Score</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Mobile and desktop Core Web Vitals from a live Lighthouse audit
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/8 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#1E3A8A] mb-1">SSL Certificate</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Certificate validity, expiry date and issuer
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1E3A8A]/8 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[#1E3A8A] mb-1">Uptime Log</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                30-day availability record from real monitoring
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
