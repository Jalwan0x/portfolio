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
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Try emailing hi@jalwan.app directly.");
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
          {status === "loading" ? "Sending..." : "Request Test"}
        </button>
      </form>
      {message && (
        <div
          className={`text-sm text-center p-3 rounded-lg ${
            status === "success"
              ? "bg-accent/10 text-accent border border-accent/30"
              : "bg-red-500/10 text-red-400 border border-red-500/30"
          }`}
        >
          {message}
        </div>
      )}
      <div className="text-center space-y-2">
        <p className="text-sm text-subtle">
          Or email <a href="mailto:hi@jalwan.app" className="text-accent">hi@jalwan.app</a>
        </p>
      </div>
    </div>
  );
}
