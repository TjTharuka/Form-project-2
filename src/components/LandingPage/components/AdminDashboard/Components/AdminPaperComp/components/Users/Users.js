import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './Users.module.scss';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { loadAnswerPapers, selectAnswerPapers } from '../../../../../../../../actions';
import { PersonOutlineOutlined } from '@material-ui/icons';
import SinglePaperAnswerModel from './Components/SinglePaperAnswerModel/SinglePaperAnswerModel';
import BasicModal from '../../../../../../../commons/Modal/BasicModal/BasicModal';

const AdminDashboard = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const selectAllAnswers = useSelector((state) =>state.answerPaperReducer?.answerPapers);
  const paperId = useSelector((state) => state.paperReducer.selectedPaper._id);
  const [viewAnswerPaperModel, setViewAnswerPaperModel] = useState(false);


  const dispatch = useDispatch();

  // EVENT LISTNERS
  const handleClick=(id)=>{
    // select paper answer
    dispatch(selectAnswerPapers(id))
    // open Model
    setViewAnswerPaperModel(!viewAnswerPaperModel)
  };

  useEffect(()=>{
    dispatch(loadAnswerPapers(`?paperId=${paperId}`));
  },[dispatch])



  return (
    <>
      <Row className={cx("pb-2 pt-2",styles.allUsers)}>
      {selectAllAnswers.map((answer,index)=>(
        <>
        <div key={answer._id} className={cx('ml-3 mt-2 pl-3 pt-1 pb-1',styles.userName)}  onClick={()=>handleClick(answer._id)}>
          <PersonOutlineOutlined></PersonOutlineOutlined>
          <span className='ml-1'>{answer.userId.name}</span>
        </div>
        </>
      ))}
    </Row>


    {/*view signle answer paper*/}
    <BasicModal
        isOpen={viewAnswerPaperModel}
        modalStyles={styles.PaperViewModelId}
        modalBodyStyles="p-0 px-4 py-3"
        size="md"
        >
        <SinglePaperAnswerModel
            closModel={()=>setViewAnswerPaperModel(!viewAnswerPaperModel)}
        />
      </BasicModal>
    </>
  );
};

export default AdminDashboard;
