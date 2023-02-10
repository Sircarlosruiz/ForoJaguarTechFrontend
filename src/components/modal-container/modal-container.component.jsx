export const ModalContainer = ({ show, className, modalRef, component }) =>
  show && (
    <div ref={modalRef} className={className}>
      {component}
    </div>
  );

export default ModalContainer;
