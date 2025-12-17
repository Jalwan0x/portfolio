"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      url: formData.get("url") as string,
      message: formData.get("message") as string,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL || "";
      if (!apiUrl) {
        throw new Error("Contact API URL not configured");
      }

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send request");
      }

      setStatus("success");
      setMessage("Request sent! I'll get back to you within 24 hours.");
      form.reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Try emailing hi@jalwan.app directly.");

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  }

  return (
    <div className="card space-y-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="space-y-2 text-sm block">
          <span className="text-subtle">Your name</span>
          <input
            required
            name="name"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-white/8 border border-white/25 px-4 py-3 text-text placeholder-subtle/50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/12 disabled:opacity-50"
            placeholder="John"
          />
        </label>
        <label className="space-y-2 text-sm block">
          <span className="text-subtle">Work email</span>
          <input
            required
            name="email"
            type="email"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-white/8 border border-white/25 px-4 py-3 text-text placeholder-subtle/50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/12 disabled:opacity-50"
            placeholder="you@company.com"
          />
        </label>
        <label className="space-y-2 text-sm block">
          <span className="text-subtle">Web app URL or domain</span>
          <input
            required
            name="url"
            type="url"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-white/8 border border-white/25 px-4 py-3 text-text placeholder-subtle/50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/12 disabled:opacity-50"
            placeholder="https://your-app.com"
          />
        </label>
        <label className="space-y-2 text-sm block">
          <span className="text-subtle">Message (optional)</span>
          <textarea
            name="message"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-white/8 border border-white/25 px-4 py-3 text-text placeholder-subtle/50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/12 disabled:opacity-50 resize-none"
            placeholder="Tell me more about your project..."
            rows={4}
          />
        </label>
        <button type="submit" className="btn-primary w-full" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
              Sending...
            </>
          ) : (
            "Request Test"
          )}
        </button>
      </form>

      {/* Success Modal */}
      {status === "success" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-card border border-white/20 rounded-xl p-8 max-w-sm mx-4 animate-slideUp text-center space-y-4">
            {/* Checkmark Animation */}
            <div className="flex justify-center">
              <div className="relative w-16 h-16">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="rgb(0, 255, 136)"
                    strokeWidth="2"
                    strokeDasharray="188.4"
                    strokeDashoffset="188.4"
                    style={{
                      animation: "drawCircle 0.8s ease-out forwards",
                    }}
                  />
                  <path
                    d="M 20 32 L 28 40 L 44 24"
                    stroke="rgb(0, 255, 136)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="30"
                    strokeDashoffset="30"
                    style={{
                      animation: "drawCheckmark 0.6s ease-out 0.3s forwards",
                    }}
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-accent">Request Received!</h3>
              <p className="text-sm text-subtle">I'll review your application and get back to you within 24 hours.</p>
            </div>

            <div className="pt-2 text-xs text-subtle">
              Check your email for confirmation
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 text-sm animate-slideDown">
          {message}
        </div>
      )}

      <div className="text-center space-y-2">
        <p className="text-sm text-subtle">
          Or email <a href="mailto:hi@jalwan.app" className="text-accent">hi@jalwan.app</a>
        </p>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawCheckmark {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
