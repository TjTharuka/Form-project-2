import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './ConfirmationModal.module.scss';
import { BasicModal } from '../../index';

const ConfirmationModal = ({ isOpen, toggle, size, submit, message }) => {
  return (
    <BasicModal
      isOpen={isOpen}
      modalBodyStyles="p-0 px-3 py-2"
      toggle={toggle}
      size={size}
    >
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
      <Row className="justify-content-center mt-2 mb-3">
        <h4 className="text-dark font-weight-bold p-1">Are you sure?</h4>
        <div className={cx(styles.divWidth, 'mt-1')} />
      </Row>

      {message ? (
        <Row className="justify-content-center mt-2 mb-3">
          <div>{message}</div>
        </Row>
      ) : (
        ''
      )}

      <div className="d-flex justify-content-around">
        <div className="mt-2">
          <Button
            onClick={submit}
            id={styles.acceptSubmitButton}
            className="confirm-delete-discussion"
            type="submit"
          >
            Yes
          </Button>
        </div>
        <div className="mt-2">
          <Button id={styles.rejectSubmitButton} type="submit" onClick={toggle}>
            No
          </Button>
        </div>
      </div>
    </BasicModal>
  );
};

export default ConfirmationModal;
