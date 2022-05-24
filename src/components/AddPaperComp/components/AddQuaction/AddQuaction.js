import React, { useState } from 'react';
import cx from 'classnames';
import styles from './AddQuaction.module.scss';
import { FormControl, MenuItem, Select, TextField } from '@material-ui/core';
import { CloudDoneOutlined, DeleteOutline, InsertPhotoOutlined } from '@material-ui/icons';
import BasicModal from '../../../commons/Modal/BasicModal/BasicModal';
import ImageUploadMOdel from './components/ImageUploadModel';
import BootstrapTooltip from '../../../commons/toolTips/ToolTips';


const AddQuaction = ({setAddPaperState,handleDeleteQuactionBtn,handleImageAdd,id,imageLocation}) => {
  

  const [answerType, setAnswerType] = useState("Short Answer");
  const [imageUploadModel, setImageUploadModel] = useState(false);

  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
  };

  return (
    <>
       <div data-id={id} className={cx('pt-2 pl-1 pr-2 pb-3 mt-3 AddQuaction',styles.AddQuaction)} >
            {/* Quaction Row*/}
            <div className={cx('',styles.QuactionRow)}>
              {/* quaction */}
              <TextField id="quactionId" className='flex-1' label="" placeholder='type quaction...' variant="filled" />
              {/* <div className='border flex-1'>
              </div> */}
              {/* add image */}            
              <BootstrapTooltip title={imageLocation?"view selected image":"select image"}>
                <div onClick={()=>setImageUploadModel(true)}>
                  {!imageLocation &&<InsertPhotoOutlined className='cursor-pointer ml-1 mr-1 '></InsertPhotoOutlined>}
                  {imageLocation && <CloudDoneOutlined className='text-color-primary cursor-pointer ml-1 mr-1'></CloudDoneOutlined>}
                </div>
              </BootstrapTooltip>


            </div>

            {/* Added image Preview (if uploaded image) */}
            <BootstrapTooltip title="view image">
              <div className='display-flex mt-3'>
                {imageLocation && <img src={imageLocation} className={cx('border-radius-15 cursor-pointer ',styles.addedImagePreview)} onClick={()=>setImageUploadModel(!imageUploadModel)}/>}
              </div>
            </BootstrapTooltip>


            {/* Answer row*/}
            <FormControl  className="mt-1 flex-0-3">
                <Select
                  labelId="answerType"
                  id="answerType"
                  onChange={handleAnswerTypeChange}
                  value={answerType}
                >
                  <MenuItem id={"ShortAnswer"} value="Short Answer">Short Answer</MenuItem>
                  <MenuItem id={"LongAnswer"} value="Long Answer">Long Answer</MenuItem>
                </Select>
              </FormControl>


            {/* bottom line row  */}
            <div className='mt-4 display-flex'>
            <BootstrapTooltip title="delete">
                <DeleteOutline className={cx('cursor-pointer ml-auto ',styles.deleteIcon)} onClick={()=>handleDeleteQuactionBtn(id)} ></DeleteOutline>
            </BootstrapTooltip>
            </div>

            {/*image upload model*/}
            <BasicModal
              isOpen={imageUploadModel}
              modalStyles={styles.addQuactionModel}
              modalBodyStyles="p-0 px-4 py-3"
              size="md"
              >
              <ImageUploadMOdel
                  id={id}
                  setImageUploadModel={()=>setImageUploadModel(!imageUploadModel)}
                  handleImageAdd={handleImageAdd}
                  imageLocation={imageLocation}
              />
            </BasicModal>
      </div>

    </>
  );
};

export default AddQuaction;
