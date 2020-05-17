import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({
  id, className, size, onClose, children,
}) => {
  const [fadeType, setFadeType] = useState(null);
  const background = useRef(null);

  const onEscKeyDown = (e) => {
    if (e.key !== 'Escape') return;
    setFadeType('out');
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFadeType('out');
  };

  useEffect(() => {
    if (fadeType === 'out') {
      onClose();
    }
  }, [fadeType]);

  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false);
    setTimeout(
      () => setFadeType('in'), 0,
    );
    return () => window.removeEventListener('keydown', onEscKeyDown, false);
  }, []);

  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className={`modal ${`size-${size}`} fade-${fadeType} ${className}`}>
      <div className="box-dialog">
        <div className="box-header">
          <h4 className="box-title">Title Of Modal</h4>
          <button onClick={handleClick} className="close">
            ×
          </button>
        </div>
        <div className="box-content">{children}</div>
      </div>
      <div
        className="background"
        onMouseDown={handleClick}
        ref={background}
      />
    </div>,
    modalRoot,
  );
};

export default Modal;
