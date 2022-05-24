import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './SinglePaper.module.scss';
import cx from 'classnames';
import Question from './Quaction/Question';
import { useDispatch, useSelector } from 'react-redux';

const AdminDashboard = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const selectedPaper = useSelector((state) =>state.paperReducer.selectedPaper);
  const [paperViewState, setPaperViewState] = useState(false);


  const dispatch = useDispatch();



  return (
    <>

    {/*all Quactions */}
    <div className='mt-3' id="allQuactions">
          {
            (selectedPaper.quactions?selectedPaper.quactions:[]).map((quactionObj,index)=>(
              <Question key={quactionObj.id} id={quactionObj._id} quaction={quactionObj} index={index} ></Question>
            ))
          }
    </div>

    </>
  );
};

export default AdminDashboard;
