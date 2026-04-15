import React from "react";

type PopupProps = {
  onClose: () => void;
  type?: "error" | "success"; 
  title?: string;
  message?: string;
};

const ErrorPopup = ({
  onClose,
  type = "error",
  title,
  message,
}: PopupProps) => {
  const isError = type === "error";

  const colors = {
    bgCircle: isError ? "bg-red-100" : "bg-green-100",
    icon: isError ? "text-red-500" : "text-green-500",
    button: isError ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600",
    title: isError ? "text-red-600" : "text-green-600",
    iconSymbol: isError ? "!" : "✓",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400"
        >
          ✕
        </button>

        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${colors.bgCircle}`}>
          <span className={`text-3xl font-bold ${colors.icon}`}>{colors.iconSymbol}</span>
        </div>

        <h3 className={`text-xl font-semibold mb-2 ${colors.title}`}>
          {title || (isError ? "Oops!" : "Success!")}
        </h3>

        <p className="text-gray-600 mb-6">
          {message || (isError ? "Please fill in all required fields correctly." : "Message received! We'll contact you soon.")}
        </p>

        <button
          onClick={onClose}
          className={`w-full text-white py-3 rounded-lg font-semibold ${colors.button}`}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
