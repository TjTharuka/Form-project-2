import React from 'react';
// reactstrap components
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const BasicModal = ({
  toggle,
  isOpen,
  title,
  size,
  children,
  shouldDisplayFooter,
  modalBodyStyles,
  modalHeaderStyles,
  backdrop,
  modalStyles,
}) => {
  return (
    <>
      <Modal
        backdrop={backdrop || ''}
        isOpen={isOpen}
        toggle={toggle}

        size={size}
        id={modalStyles}
      >
        {title && (
          <ModalHeader
            toggle={toggle}
            className={
              !modalHeaderStyles
                ? 'text-dark font-weight-bold'
                : modalHeaderStyles
            }
          >
            {title}
          </ModalHeader>
        )}
        <ModalBody className={modalBodyStyles}>{children}</ModalBody>
        {shouldDisplayFooter && <ModalFooter />}
      </Modal>
    </>
  );
};

export default BasicModal;
