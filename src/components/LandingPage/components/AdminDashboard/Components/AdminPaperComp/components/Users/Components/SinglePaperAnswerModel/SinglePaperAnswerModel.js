import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './SinglePaperAnswerModel.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTooltip from '../../../../../../../../../commons/toolTips/ToolTips';
import Question from './../../../SinglePaper/Quaction/Question';
import { PersonOutline, PersonOutlineOutlined } from '@material-ui/icons';

const SinglePaperAnswerModel = ({closModel}) => {

  // REDUX STATE
  const userId = useSelector((state) =>state.auth.user.user_id);
  const selectedAnswerPaper = useSelector((state) =>state.answerPaperReducer?.selectedAnswerPaper);
  const [navState,setNavState]=useState('paper');

  // EVENT HANDLERS

  return (
    <>

      {/* Close button */}
      <Row className="justify-content-end">
          <Col xs={8}>
            <span className={cx(styles.closeIconPlacement)}>
              <BootstrapTooltip title="Close">
                <CloseIcon
                  className={cx(
                    styles.cross,
                    'pt-2 pr-2 mt--1 mr-1 float-right cursor-pointer'
                  )}
                  onClick={() => {
                    closModel();
                  }}
                />
              </BootstrapTooltip>
            </span>
          </Col>
      </Row>

      {/* title */}
      <Row className="justify-content-center mt-2 mb-3">
        <h4 id={'styles.titleSize'} className=" font-weight-bold p-1">
          Answer Sheet
        </h4>
      </Row>

      {/*Paper Name*/}
      <BootstrapTooltip title="Paper Name">
        <div className={cx(styles.paperName)}>{selectedAnswerPaper.paperId?.PaperName}</div>
      </BootstrapTooltip>
      
      {/*student Name*/}
      <BootstrapTooltip title="Student Name">
        <div className={cx('mt-2',styles.studentName)}>
              <PersonOutlineOutlined></PersonOutlineOutlined>
              <span className='ml-1'>{selectedAnswerPaper?.userId?.name}</span>
        </div>
      </BootstrapTooltip>

         {/*all Quactions and answers */}
        <div className='mt-3' id="allQuactions">
              {
                (selectedAnswerPaper.answers?selectedAnswerPaper.answers:[]).map((quactionObj,index)=>(
                  <>
                  <Question key={quactionObj._id} id={quactionObj._id} quaction={quactionObj.question} index={index} answer={quactionObj.answer}></Question>
                  </>
                ))
              }
        </div>

    </>
  );
};

export default SinglePaperAnswerModel;
