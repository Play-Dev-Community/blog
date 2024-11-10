// Modal.tsx
import React from "react";

import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-container">

      <div className="modal-overlay" onClick={onClose}></div>

      <div className='modal-content'>
        <button
          onClick={onClose}
          className="close-button"
          aria-label="Close Modal"
        >
          ×
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        {description && <span className="modal-description"> {description} </span>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
