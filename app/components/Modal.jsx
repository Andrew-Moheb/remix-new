// eslint-disable-next-line react/prop-types
function Modal({ children, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <dialog
        className="modal"
        open
        onClick={(event) => event.stopPropagation()}
        aria-hidden="true"
      >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
