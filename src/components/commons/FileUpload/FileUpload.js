import React, { useState } from 'react';
import styles from './FileUpload.module.scss';
import cx from 'classnames';
import { CloudUploadOutlined} from '@material-ui/icons';
import { postFormData } from '../../../api/main.api';



function FileUpload({className="",id,handleImageAdd,setImageUploadModel,imageLocation}) {
    const[uploadSatate,SetUploadMessage]=useState('Drag and drop or  click');

    // EVENT LISTNERS
    const handleChange=(e)=>{
        const imagefile = e.target.files[0];
        const formData = new FormData();
        const imgLocation = URL.createObjectURL(e.target.files[0]);
        
        // if image selected close model
        if(imagefile) setImageUploadModel();

        // set options to fromdata
        formData.append('demo_file',imagefile);
        formData.append('dimensions',[{width:590,height:331}]);

        // add image loaction and formdata 
        handleImageAdd(id,{imgLocation:imgLocation,formData:formData});

        // postFormData('files',formData).then(data=>{
        // })
    };   

  return (
    <div className={cx(styles.fileUpload)}  onChange={handleChange}>  

            {/* Uploaded Image preview */}
            <div className={cx('p-1 mt-4',styles.uploadedImagePreviewDiv)}>

            {/*upload icon and text  */}
            <div className={cx(styles.fileUploadIcon)}>
                <CloudUploadOutlined className={cx(styles.svg,imageLocation?"display-none":"",imageLocation?styles.textColorWhite:"")} ></CloudUploadOutlined>
                <div className={cx('font-1-4',imageLocation?"display-none":"",styles.uploadStateText,imageLocation?styles.textColorWhite:"")}>{uploadSatate}</div>
            </div>
            
            <img src={imageLocation} className={cx('w-100',styles.uploadedImagePreviewImg)} ></img>
        
            <input   type="file"  border={false} className={cx('p-1  opacity-0',styles.fileUploadInput,styles.dragAndDrop)} ></input>
        </div>  

    </div>
  );
}



export default FileUpload;