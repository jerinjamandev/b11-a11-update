import React from "react";
import { Link } from "react-router-dom";



const NotFound=()=> {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Illustration / visual */}
        <section className="flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* stylized SVG illustration — simple, scalable, accessible */}
            <svg
              viewBox="0 0 800 600"
              role="img"
              aria-labelledby="titleDesc"
              className="w-full h-auto"
            >
              <title id="titleDesc">404 — Page not found</title>
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#FBCFE8" />
                  <stop offset="1" stopColor="#C7A2FF" />
                </linearGradient>
              </defs>

              <g transform="translate(40,30)">
                <rect x="0" y="0" rx="24" width="720" height="420" fill="#F8FAFC" stroke="#E6E9EE" />

                {/* Decorative circle */}
                <circle cx="620" cy="80" r="44" fill="url(#g)" opacity="0.95" />

                {/* Broken compass / marker to hint 'lost' */}
                <g transform="translate(120,100)">
                  <circle cx="220" cy="160" r="110" fill="#FFFFFF" stroke="#E9EDF2" />

                  <g transform="translate(220,160) rotate(20)">
                    <path d="M-20 -60 L 0 -20 L 20 -60 L 0 -40 Z" fill="#F9A8D4" opacity="0.95" />
                    <circle cx="0" cy="0" r="6" fill="#7C3AED" />
                  </g>

                  {/* small lines */}
                  <path d="M90 300 q120 -80 260 -40" stroke="#E6E9EE" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Text "404" in SVG for crisp look */}
                <text x="48" y="92" fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto" fontSize="84" fontWeight="700" fill="#111827">404</text>

              </g>
            </svg>
          </div>
        </section>

        {/* Content */}
        <section className="p-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase text-pink-600 tracking-wide">Page not found</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">We couldn't find that page.</h1>
            <p className="mt-4 text-base text-slate-600">The page you are looking for may have been moved or does not exist. Try returning to the homepage or reach out if you think this is a mistake.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-slate-900 text-white text-sm font-medium shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Go back home
              </Link>

              <a
                href="mailto:jerinjaman.dev@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-slate-200 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
              >
                Contact support
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <p>
                Tip: try checking the URL for typos, or use the navigation to find what you need.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-500 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                Still stuck? Visit our <a href="/help" className="underline hover:text-slate-900">Help Center</a> or <a href="/status" className="underline hover:text-slate-900">System Status</a>.
              </span>
            </div>

            {/* small  footer note */}
            <p className="mt-8 text-xs text-slate-400">If you believe this to be an error, please include the URL and any steps to reproduce when contacting support.</p>
          </div>
        </section>
      </div>

      {/* Corner badge / small footer */}
      <div className="absolute left-6 bottom-6 text-xs text-slate-400">© {new Date().getFullYear()} YourCompany</div>
    </main>
  );
}

export default NotFound;