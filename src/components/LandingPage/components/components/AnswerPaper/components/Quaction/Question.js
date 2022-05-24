import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Question.module.scss';
import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';


const AddQuaction = ({id,imageLocation,quaction,index}) => {
  

  return (
    <>
       <div  id="quaction" className={cx('pt-2 pl-1 pr-2 pb-3 mt-3 AddQuaction',styles.AddQuaction)} >
            {/* Quaction Row*/}
            {/* quaction */}
            <div data-id={id} id="quactionId" className='flex-1'>{index+1}) {quaction.question} *</div>

            {/* Added image Preview (if uploaded image) */}
              {quaction.fileId &&(<div className='display-flex mt-3'>
                 <img src={`https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg`} className={cx('border-radius-15 cursor-pointer ',styles.addedImagePreview)} />
              </div>)}


            {/* Answer row*/}
            <TextField id="answerId" label="" variant="standard" placeholder='Your Answer'/>

      </div>

    </>
  );
};

export default AddQuaction;
