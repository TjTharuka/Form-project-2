import React from 'react';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { Row, Col } from 'reactstrap';

function PopupMessage({ msg, error }) {
  return (
    <Row>
      <Col xs="1">{error ? <CloseRoundedIcon /> : <DoneRoundedIcon />}</Col>
      <Col xs="10">
        <span>{msg}</span>
      </Col>
    </Row>
  );
}

export default PopupMessage;
