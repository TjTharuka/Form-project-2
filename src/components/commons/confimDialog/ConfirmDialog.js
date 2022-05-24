import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './ConfirmDialog.module.scss';
import BasicModal from '../Modal/BasicModal/BasicModal';

function ConfirmDialog({
  isOpen,
  isOpenToggle,
  cancelText,
  continueText,
  message,
  confirm,
}) {
  const onClickConfirm = () => {
    isOpenToggle();
    confirm();
  };
  return (
    <BasicModal
      modalBodyStyles="p-0 px-3 py-2"
      isOpen={isOpen}
      toggle={isOpenToggle}
      size="md"
    >
      <>
        <Row className="justify-content-end">
          <Col xs={8}>
            <span className={cx(styles.closeIconPlacement)}>
              <CloseIcon
                className={cx(styles.cross, 'pt-2 pr-2 mt-1 mr-1 float-right')}
                onClick={isOpenToggle}
              />
            </span>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2 mb-3">
          <h4 className="text-dark font-weight-bold p-1">{message}</h4>
          <div className={cx(styles.divWidth, 'mt-1')} />
        </Row>

        <div className="d-flex justify-content-around">
          <div className="mt-2">
            <Button
              onClick={onClickConfirm}
              type="submit"
              className="grp-delete-confirm"
              color="danger"
              outline
            >
              {continueText}
            </Button>
          </div>
          <div className="mt-2">
            <Button
              outline
              type="submit"
              onClick={isOpenToggle}
              color="primary"
            >
              {cancelText}
            </Button>
          </div>
        </div>
      </>
    </BasicModal>
  );
}

export default ConfirmDialog;
