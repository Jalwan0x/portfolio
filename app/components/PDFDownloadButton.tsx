"use client";
import { useState } from "react";

export function PDFDownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate scanning/generating time (3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Start download
    const link = document.createElement("a");
    link.href = "/sample-pentest-report.pdf";
    link.download = "sample-pentest-report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success state
    setIsDownloading(false);
    setShowSuccess(true);

    // Hide success after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isDownloading || showSuccess}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-accent hover:bg-accent/90 text-white disabled:opacity-60 transition-all duration-200"
      >
        {isDownloading ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Generating Report...
          </>
        ) : showSuccess ? (
          <>
            <span className="text-lg">✓</span>
            Downloaded!
          </>
        ) : (
          <>
            <span>📥</span>
            Download sample report (PDF)
          </>
        )}
      </button>

      {/* Scanning Modal */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-card border border-white/20 rounded-xl p-8 max-w-sm mx-4 animate-slideUp">
            <div className="space-y-6">
              {/* Animated Scanning Lines */}
              <div className="flex justify-center">
                <div className="relative w-24 h-24">
                  {/* Outer ring */}
                  <svg
                    className="absolute inset-0 animate-spin"
                    style={{ animationDuration: "2s" }}
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="url(#grad)"
                      strokeWidth="2"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient
                        id="grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#00ff88" />
                        <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Inner animated circle */}
                  <svg
                    className="absolute inset-0 animate-spin"
                    style={{ animationDuration: "3s", animationDirection: "reverse" }}
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="rgb(0, 255, 136)"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  </svg>

                  {/* Center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-textBright">
                  Generating Report
                </h3>
                <p className="text-sm text-subtle">
                  Analyzing security findings...
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full"
                  style={{
                    animation: "slideRight 3s ease-in-out forwards",
                  }}
                />
              </div>

              {/* Scanning steps */}
              <div className="space-y-2">
                {[
                  "Compiling findings",
                  "Formatting report",
                  "Preparing PDF",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-subtle animate-fadeIn"
                    style={{
                      animationDelay: `${i * 0.6}s`,
                      opacity: 0,
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideRight {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
