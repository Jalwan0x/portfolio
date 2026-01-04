import React, { useState } from "react";
import AnimatedModal from "./AnimatedModal";
import { useEffect, useState as useReactState } from "react";

const PDFDownloadButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [pentestStep, setPentestStep] = useReactState(0);

  const pentestSteps = [
    "Scanning app for vulnerabilities...",
    "Testing authentication & access control...",
    "Hunting for business logic flaws...",
    "Checking API endpoints...",
    "Generating report...",
    "Download ready!"
  ];

  useEffect(() => {
    if (showModal && pentestStep < pentestSteps.length - 1) {
      const timer = setTimeout(() => setPentestStep(pentestStep + 1), 700);
      return () => clearTimeout(timer);
    }
    if (showModal && pentestStep === pentestSteps.length - 1) {
      // Start download when animation finishes
      const link = document.createElement("a");
      link.href = "/sample-pentest-report.pdf";
      link.download = "sample-pentest-report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [showModal, pentestStep]);

  const handleDownload = (e: React.MouseEvent) => {
    setPentestStep(0);
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors text-base mt-4 focus:outline-none focus:ring-2 focus:ring-primary/50 justify-center"
        style={{ maxWidth: 400 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
        </svg>
        Download Sample Report
      </button>
      <AnimatedModal show={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary animate-spin-slow">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">{pentestStep < pentestSteps.length - 1 ? "Pentesting..." : "Download started!"}</h3>
          <p className="text-muted-foreground text-sm min-h-[2em] transition-all duration-300">
            {pentestSteps[pentestStep]}
          </p>
        </div>
      </AnimatedModal>
    </>
  );
};

export default PDFDownloadButton;
