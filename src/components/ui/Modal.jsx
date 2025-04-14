"use client";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>
        {children}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding:1rem;
        }

        .modal-content {
          position: relative;
          background: white;
          max-height: 90vh;
          overflow-y: auto;
          padding: 1rem;
          border-radius: 12px;
        }

        .animate-scaleIn {
          animation: scaleIn 0.25s ease-in-out;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
