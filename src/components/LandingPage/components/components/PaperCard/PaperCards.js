import React, { useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import cx from 'classnames';
import Row from 'reactstrap/lib/Row';
import styles from './PaperCards.module.scss';

const PaperCards = ({id,selectPaperHandler,setPaperViewState,paper}) => {

  const handleClick=(id)=>{
    selectPaperHandler(id);
    setPaperViewState();
  };

  return (
    <>
      <div className={cx('pt-5 pb-5 pl-4 pr-4',styles.paperCard)} onClick={()=>handleClick(id)}>
        <div className={cx('font-weight-bold',styles.title)}>{paper.PaperName} </div>
      </div>
    </>
  );
};

export default PaperCards;
