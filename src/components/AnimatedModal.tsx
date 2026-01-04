import React, { useState } from "react";

const AnimatedModal = ({ show, onClose, children }: { show: boolean; onClose: () => void; children: React.ReactNode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${show ? 'visible bg-black/40' : 'invisible bg-transparent'}`}
      style={{ pointerEvents: show ? 'auto' : 'none' }}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-card rounded-2xl shadow-xl p-8 max-w-sm w-full text-center transform transition-all duration-300 ${show ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          className="mt-6 px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AnimatedModal;
