import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import CloseIcon from '@material-ui/icons/Close';
import cx from 'classnames';

import { BasicModal } from '../../index';
import styles from './ErrorMessageModal.module.scss';

const ErrorMessageModal = ({
  isOpen,
  toggle,
  size,
  displayCloseIcon,
  message,
}) => {
  return (
    <BasicModal
      isOpen={isOpen}
      modalBodyStyles="p-0 px-3 py-4 text-center"
      toggle={toggle}
      size={size}
      modalStyles={styles.modalStyles}
    >
      {displayCloseIcon && (
        <Row className="justify-content-end">
          <Col xs={8}>
            <span className={cx(styles.closeIconPlacement)}>
              <CloseIcon
                className={cx(styles.cross, 'pt-2 pr-2 mt-1 mr-1 float-right')}
                onClick={toggle}
              />
            </span>
          </Col>
        </Row>
      )}

      {message ? (
        <Row className="justify-content-center mt-2 mb-3">
          <div>{message}</div>
        </Row>
      ) : (
        ''
      )}

      <div className="d-flex justify-content-around">
        <div className="mt-2">
          <Button onClick={toggle}>Ok</Button>
        </div>
      </div>
    </BasicModal>
  );
};

export default ErrorMessageModal;
