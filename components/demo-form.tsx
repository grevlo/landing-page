"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

export function DemoForm() {
  const [url, setUrl]               = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [state, setState]           = useState<FormState>("idle");
  const [errorMsg, setErrorMsg]     = useState("");
  const [urlError, setUrlError]     = useState("");
  const [showCancel, setShowCancel] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // After 30 seconds in the loading state, offer a cancel option.
  useEffect(() => {
    if (state !== "loading") {
      setShowCancel(false);
      return;
    }
    const timer = setTimeout(() => setShowCancel(true), 30_000);
    return () => clearTimeout(timer);
  }, [state]);

  function handleCancel() {
    abortRef.current?.abort();
    setState("idle");
    setShowCancel(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUrlError("");
    setErrorMsg("");

    // ── Client-side URL validation ────────────────────────────────────────────

    if (!url.trim()) {
      setUrlError("Please enter a website URL");
      return;
    }

    const lower = url.toLowerCase();
    if (
      lower.includes("localhost") ||
      lower.includes("127.0.0.1") ||
      /\b(192\.168\.|10\.\d+\.|172\.(1[6-9]|2\d|3[01])\.)/i.test(lower)
    ) {
      setUrlError("Please enter a publicly accessible website URL");
      return;
    }

    // Auto-prepend https:// when no protocol is supplied.
    const targetUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;

    setState("loading");
    abortRef.current = new AbortController();

    try {
      const apiUrl = `https://api.grevlo.com/v1/demo/report?url=${encodeURIComponent(targetUrl)}&agencyName=${encodeURIComponent(agencyName)}`;
      const res = await fetch(apiUrl, { signal: abortRef.current.signal });

      if (!res.ok) {
        // Try to extract a user-friendly message from the API response body.
        // Validation errors return { error, message }; upstream errors return
        // ProblemDetails { detail, title }. Fall back to a generic message.
        let msg = "Something went wrong — please try again.";
        try {
          const data = await res.json();
          if (typeof data.message === "string" && data.message) msg = data.message;
          else if (typeof data.detail  === "string" && data.detail)  msg = data.detail;
        } catch {
          /* non-JSON body — use generic message */
        }
        setErrorMsg(msg);
        setState("error");
        return;
      }

      const blob      = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a         = document.createElement("a");
      a.href          = objectUrl;
      a.download      = "grevlo-demo-report.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

      setState("success");
    } catch (err: unknown) {
      // AbortError means the user clicked cancel — don't show an error.
      if ((err as { name?: string })?.name === "AbortError") return;
      setErrorMsg("Something went wrong — please try again.");
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
          Want branded reports like this for all your clients, automatically?
        </p>
        <Link
          href="/#founding-partner"
          className="block text-sm text-[#1E3A8A] font-medium underline hover:no-underline"
        >
          Apply for founding partner access →
        </Link>
        <button
          onClick={() => { setState("idle"); setUrl(""); setAgencyName(""); }}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          Try another URL
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 w-full">
      <div>
        <label htmlFor="demo-agency" className="block text-sm font-medium text-gray-700 mb-1">
          Agency name
        </label>
        <input
          id="demo-agency"
          type="text"
          value={agencyName}
          onChange={(e) => setAgencyName(e.target.value)}
          placeholder="e.g. Acme Digital Ltd"
          required
          disabled={state === "loading"}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] disabled:opacity-50 transition"
        />
      </div>
      <div>
        <label htmlFor="demo-url" className="block text-sm font-medium text-gray-700 mb-1">
          Your website URL
        </label>
        <input
          id="demo-url"
          type="text"
          value={url}
          onChange={(e) => { setUrl(e.target.value); if (urlError) setUrlError(""); }}
          placeholder="e.g. https://youragency.co.uk"
          required
          disabled={state === "loading"}
          className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] disabled:opacity-50 transition ${urlError ? "border-red-400" : "border-gray-200"}`}
        />
        {urlError && (
          <p className="mt-1 text-xs text-red-500">{urlError}</p>
        )}
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
            Generating your report…
          </span>
        ) : (
          "Generate My Free Report"
        )}
      </button>
      {state === "loading" && !showCancel && (
        <p className="text-xs text-gray-400 text-center">
          Takes ~45 seconds. We run a live audit — not cached data.
        </p>
      )}
      {state === "loading" && showCancel && (
        <div className="text-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-xs text-gray-500 underline hover:text-gray-700 transition-colors"
          >
            Taking longer than expected — cancel and try again
          </button>
        </div>
      )}
      {state === "error" && (
        <p className="text-xs text-red-500">{errorMsg}</p>
      )}
      <p className="text-xs text-gray-400 text-center pt-1">
        We don&apos;t store your details. Your report is generated in real time.
      </p>
    </form>
  );
}
