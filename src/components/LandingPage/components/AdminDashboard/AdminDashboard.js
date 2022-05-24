import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './AdminDashboard.module.scss';
import cx from 'classnames';
import AdminPaperComp from './Components/AdminPaperComp/AdminPaperComp';
import { useDispatch, useSelector } from 'react-redux';
import { loadPapers, selectPaper} from '../../../../actions';
import BasicModal from '../../../commons/Modal/BasicModal/BasicModal';

const AdminDashboard = ({addPaperState, setAddPaperState}) => {

  // REDUX STATE
  const allPapers = useSelector((state) =>state.paperReducer.papers);
  const adminId = useSelector((state) => state.auth.user.user_id);

  const [adminPaperViewState, setadminPaperViewState] = useState(false);


  const dispatch = useDispatch();

  useEffect(()=>{
    // load all answePapers
    dispatch(loadPapers(`?adminId=${adminId}`));
  },[dispatch]);

  // EVENT HANDLERS3
  const handleClick=(id)=>{
    // select paper
    dispatch(selectPaper(id))
    // open Model
    setadminPaperViewState(true);
  };

  return (
    <>


    {/*all papers admin added*/}
    {!(allPapers.length===0) &&(
    <div className={cx("pb-2 pt-2 ",styles.allPapers)}>
      
      {/* Title */}
      <div className={cx('pl-2',styles.title)}>All Papers </div>
     
      {/* All papers */}
      {allPapers.map((paper,index)=>(
        <div key={paper._id} className={cx('ml-3 mr-3 mt-2 pl-2',styles.paperTitle)}  onClick={()=>handleClick(paper._id)}>{index+1}) {paper.PaperName}</div>
      ))}
    </div>)}

      {/*view signle paper*/}
      <BasicModal
        isOpen={adminPaperViewState}
        modalStyles={styles.PaperViewModelId}
        modalBodyStyles="p-0 px-4 py-3"
        size="md"
        >
        <AdminPaperComp
            closModel={()=>setadminPaperViewState(!adminPaperViewState)}
        />
      </BasicModal>

    </>
  );
};

export default AdminDashboard;
