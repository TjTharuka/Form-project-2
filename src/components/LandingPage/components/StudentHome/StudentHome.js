import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './StudentHome.module.scss';
import cx from 'classnames';
import PaperCard from '../components/PaperCard/PaperCards';
import PaperComp from '../components/AnswerPaper/PaperComp';
import { useDispatch, useSelector } from 'react-redux';
import { loadPapers, selectPaper } from '../../../../actions';
import BasicModal from '../../../commons/Modal/BasicModal/BasicModal';

const StudentHome = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const allPapers = useSelector((state) =>state.paperReducer.papers);
  const [paperViewState, setPaperViewState] = useState(false);


  const dispatch = useDispatch();

  useEffect(()=>{
    // load all papers
    dispatch(loadPapers());
  },[]);

  // EVENT HANDLERS
  const selectPaperHandler=(id)=>{
    dispatch(selectPaper(id));
  };

  return (
    <>
      <Row className={cx(styles.paperCards)}>
        {allPapers.map(paper=>(
          <Col className='col-4 mb-3'>
            <PaperCard 
              className="" 
              key={paper._id} 
              id={paper._id} 
              selectPaperHandler={selectPaperHandler}
              setPaperViewState={()=>setPaperViewState(!paperViewState)}
              paper={paper}
              >
            </PaperCard>
          </Col>
        ))}
      </Row>

      {/*add paper model*/}
      <BasicModal
        isOpen={paperViewState}
        modalStyles={styles.PaperViewModelId}
        modalBodyStyles="p-0 px-4 py-3"
        size="md"
        >
        <PaperComp
            setPaperViewState={()=>setPaperViewState(!paperViewState)}
        />
      </BasicModal>

    </>
  );
};

export default StudentHome;
