import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import styles from './AdminPaperComp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTooltip from '../../../../../commons/toolTips/ToolTips';
import SinglePaper from './components/SinglePaper/SinglePaper';
import Users from './components/Users/Users';

const AddPaperComp = ({closModel}) => {

  // REDUX STATE
  const userId = useSelector((state) =>state.auth.user.user_id);
  const selectedPaper = useSelector((state) =>state.paperReducer?.selectedPaper);
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

      {/* admin paper comp NAV*/}
      <div className='mb-4'>
              <span className={cx('cursor-pointer mr-2 pb-1 pr-1 pl-1',styles.NavItem, navState==="paper" && styles.NavActive)} onClick={()=>setNavState("paper")}>paper</span>
              <span className={cx('cursor-pointer pb-1 pr-1 pl-1',styles.NavItem,navState==="users" && styles.NavActive)} onClick={()=>setNavState("users")}>submited users</span>
      </div>

      {/* single Paper */}
      {navState==="paper" && (<SinglePaper></SinglePaper>)}          

      {/* users */}
      {navState==="users" && (<Users></Users>)}          

    </>
  );
};

export default AddPaperComp;
