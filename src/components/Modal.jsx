import React from "react";

const Modal = ({ isVisible, onClose, type, content }) => {
  if (!isVisible) return null;

  const bgColor = type === "correct" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`p-4 rounded-lg shadow-lg max-w-sm w-full ${bgColor}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200"
        >
          &times;
        </button>
        <div className="mt-2 text-white">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
