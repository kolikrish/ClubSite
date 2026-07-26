import React from "react";
import { Link } from "react-router";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorBoundaryProps {
  title?: string;
  message?: string;
  error?: Error | unknown;
  resetError?: () => void;
}

export default function ErrorBoundary({
  title = "Something Went Wrong",
  message = "An unexpected error occurred while loading this page.",
  error,
  resetError,
}: ErrorBoundaryProps) {
  const errorMessage =
    error instanceof Error ? error.message : typeof error === "string" ? error : null;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16 bg-white text-[#0A1D3D]">
      <div className="max-w-lg w-full bg-white border border-gray-200/90 rounded-3xl p-8 sm:p-10 shadow-xl text-center relative overflow-hidden">
        <div className="w-16 h-16 bg-red-50 text-[#fa4c43] border border-red-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <AlertTriangle size={32} />
        </div>

        <h1 className="text-3xl sm:text-4xl fbold font-bold text-[#0A1D3D] mb-3">
          {title}
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          {message}
        </p>

        {errorMessage && (
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200/80 rounded-2xl text-left overflow-x-auto text-xs font-mono text-gray-700">
            <span className="font-semibold text-[#fa4c43] block mb-1">Details:</span>
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetError || (() => window.location.reload())}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#fa4c43] hover:bg-[#ed374f] text-white fbold font-semibold transition-all shadow-md cursor-pointer"
          >
            <RefreshCw size={18} /> Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#0A1D3D] text-[#0A1D3D] hover:bg-[#0A1D3D] hover:text-white fbold font-semibold transition-colors"
          >
            <Home size={18} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
