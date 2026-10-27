
import React from "react";
import { Package } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-3xl bg-primary/10 blur-xl" />

        <div className="absolute inset-0 animate-spin rounded-3xl border-2 border-transparent border-t-primary border-r-primary/40" />

        <div className="relative flex h-16 w-16 animate-[float_2s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg shadow-primary/25">
          <Package size={32} strokeWidth={1.8} />
        </div>

        <span className="absolute -right-1 top-3 h-2.5 w-2.5 animate-ping rounded-full bg-primary/70" />
        <span className="absolute -bottom-1 left-4 h-2 w-2 animate-pulse rounded-full bg-blue-400" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
