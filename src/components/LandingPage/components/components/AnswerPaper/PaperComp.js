import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './PaperComp.module.scss';
import Question from './components/Quaction/Question';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTooltip from '../../../../commons/toolTips/ToolTips';
import { submitAnswerPaper } from '../../../../../actions/answerPaper/answerPaper';

const PaperComp = ({setPaperViewState}) => {

  // STATE
  const [allQuaction, setAllQuaction] = useState([]);
  const [PaperName, setPaperName] = useState("");
  const [diffculty, setDiffculty] = useState("Normal");
  const [grade, setGrade] = useState(10);

  // REDUX STATE
  const userId = useSelector((state) =>state.auth.user.user_id);
  // const quactions = useSelector((state) =>state.paperReducer.selectedPaper?.quactions?state.paperReducer.selectedPaper?.quactions:[]);
  const selectedPaper = useSelector((state) =>state.paperReducer?.selectedPaper);

  const dispatch = useDispatch();


  // EVENT HANDLERS
  // handle submit form
  const handleSubmit = (event) => {
  event.preventDefault();

    // get all quactionsId's and answers by DOM
    const quactionsArray = Array.from(document.querySelectorAll('#quaction'));

    
    // modifiy answers for api endpoint
    const newAnswerArray=quactionsArray.map((element,index)=>{
      return{
        question:element.querySelector('#quactionId').dataset.id,
        answer:element.querySelector('#answerId').value,
      }
    });


   const userAnswerPaper={
    userId:userId,
    paperId:selectedPaper._id,
    answers:newAnswerArray
    }

    dispatch(submitAnswerPaper(userAnswerPaper,setPaperViewState));

  };


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
                    setPaperViewState();
                  }}
                />
              </BootstrapTooltip>
            </span>
          </Col>
      </Row>

      {/* title */}
      <Row className="justify-content-center mt-2 mb-3">
        <h4 id={'styles.titleSize'} className=" font-weight-bold p-1">
          {selectedPaper?.PaperName}
        </h4>
      </Row>

      <form onSubmit={handleSubmit}>

       


        {/*all Quactions */}
        <div className='mt-3' id="allQuactions">
          {
            (selectedPaper.quactions?selectedPaper.quactions:[]).map((quactionObj,index)=>(
              <Question key={quactionObj.id} id={quactionObj._id} quaction={quactionObj} index={index} ></Question>
            ))
          }
        </div>


         {/*button (add quaction button , submit button) row*/}
         <Button
              className={cx("mt-2 background-primary cursor-pointer display-flex align-items-center ml-auto",styles.submitBtn)}
              type="submit"
              size="sm"
            >
              <span className="text-capitalize text-white">
                Submit
              </span>
          </Button>

      </form>

    </>
  );
};

export default PaperComp;
