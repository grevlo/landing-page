"use client";
import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export function DemoForm() {
  const [url, setUrl] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const targetUrl = url.startsWith("http") ? url : `https://${url}`;
      const apiUrl = `https://api.grevlo.com/v1/demo/report?url=${encodeURIComponent(targetUrl)}`;

      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = "grevlo-demo-report.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

      setState("success");
    } catch {
      setErrorMsg("Something went wrong generating your report. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-5 space-y-3">
        <p className="text-sm font-semibold text-green-700">
          Your report is downloading now.
        </p>
        <p className="text-sm text-gray-600">
          Want branded reports like this for all your clients, automatically?{" "}
          <Link
            href="/#founding-partner"
            className="text-[#1E3A8A] font-medium underline hover:no-underline"
          >
            Apply for founding partner access →
          </Link>
        </p>
        <button
          onClick={() => { setState("idle"); setUrl(""); setAgencyName(""); setEmail(""); }}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          Try another URL
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md">
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourclient.co.uk"
          required
          disabled={state === "loading"}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] disabled:opacity-50 transition"
        />
      </div>
      <div>
        <input
          type="text"
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
          placeholder="Your agency name"
          required
          disabled={state === "loading"}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] disabled:opacity-50 transition"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@agency.com"
          required
          disabled={state === "loading"}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] disabled:opacity-50 transition"
        />
      </div>
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full rounded-lg bg-[#A3E635] text-[#1E3A8A] font-bold text-sm py-3 px-6 hover:bg-[#92d120] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {state === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Running PageSpeed &amp; SSL scan…
          </span>
        ) : (
          "Generate My Free Report"
        )}
      </button>
      {state === "loading" && (
        <p className="text-xs text-gray-400 text-center">
          This takes around 15 seconds — we&apos;re running a live scan.
        </p>
      )}
      {state === "error" && (
        <p className="text-xs text-red-500">{errorMsg}</p>
      )}
    </form>
  );
}
