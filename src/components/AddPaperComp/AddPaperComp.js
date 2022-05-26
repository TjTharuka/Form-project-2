import React, { useEffect, useState } from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import BootstrapTooltip from '../commons/toolTips/ToolTips';
import cx from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import AddQuaction from './components/AddQuaction/AddQuaction';
import PaperDetailsFrom from './components/PaperDetailsFrom/PaperDetailsFrom';
import { Add } from '@material-ui/icons';
import styles from './AddPaperComp.module.scss';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import BasicModal from '../commons/Modal/BasicModal/BasicModal';
import { createPaper } from '../../actions/papers/papers';
import { fileUpload } from '../../actions/files/file';

const AddPaperComp = ({ setAddPaperState }) => {
  // STATE
  const [allQuaction, setAllQuaction] = useState([]);
  const [allQuactionCount, setAllQuactionCount] = useState('');
  const [PaperName, setPaperName] = useState('');

  // REDUX STATE
  const userId = useSelector((state) => state.auth.user.user_id);
  const upalodedFielsQuactions = useSelector((state) => state.fileReducer);

  const dispatch = useDispatch();

  // if quaction include image and text
  useEffect(() => {
    const allQuactions=[...upalodedFielsQuactions.allQuactions];
    const fileQuactions=[...upalodedFielsQuactions.fileQuactions];
    const fileQuactionLength=upalodedFielsQuactions.fileQuactions.length;
    const allQuactionLength=allQuactions.filter(quaction=>quaction.fileId===true);

    // set all file ids spefic quaction 
  if((allQuactions.length )&& fileQuactionLength===allQuactionLength.length){
      fileQuactions.map(quaction=>{
        allQuactions[quaction.index]=quaction;
      })


      dispatch(
            createPaper(
              {
                PaperName: PaperName,
                adminId: userId,
                quactions: allQuactions,
              },
              setAddPaperState
            )
          );
    }
  }, [upalodedFielsQuactions.fileQuactions]);


  // if all quaction text
  useEffect(() => {

    const allQuactions=[...upalodedFielsQuactions.allQuactions];
    const allQuactionFiles=allQuactions.filter(quaction=>quaction.fileId===true);


    if((allQuactions.length )&& (!allQuactionFiles.length)){
      // disparch all quactions 
      dispatch(
            createPaper(
              {
                PaperName: PaperName,
                adminId: userId,
                quactions: allQuactions,
              },
              setAddPaperState
            )
          );
          
    }


  }, [upalodedFielsQuactions.allQuactions]);

  // EVENT HANDLERS
  // handle add quaction
  const handleAddQuactionBtn = () => {
    setAllQuaction([...allQuaction, { id: Math.random() }]);
  };
  // handle delete quaction
  const handleDeleteQuactionBtn = (id) => {
    const newQuactionArray = allQuaction.filter(
      (quaction) => quaction.id !== id
    );
    setAllQuaction(newQuactionArray);
  };

  // handle image add
  const handleImageAdd = (id, file) => {
    const newQuactionArray = allQuaction.map((quaction) => {
      if (quaction.id == id)
        return { ...quaction, file: file, questionType: 'image' };
      return quaction;
    });
    setAllQuaction(newQuactionArray);
  };

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    // get all quactions by DOM
    const quactionsArray = Array.from(
      document.querySelectorAll('.AddQuaction')
    );

    const newQuactionArray = [];

    // modifiy quaction details for api endpoint
    const loop = quactionsArray.map((element, index) => {
      const newQuactionObj={
        question:element.querySelector('#quactionId').value,
        questionType:allQuaction[index].file?"image":"text",
        adminId:userId
      }
      

      if (allQuaction[index].file) {
        const file = allQuaction[index].file.formData;
        // tempory added formData as file Id 
        newQuactionObj.fileId = file;
      }

      if (newQuactionObj.question) {
        newQuactionArray.push(newQuactionObj);
        return;
      } else {
        // remove empty quaction
        // const closeAllQuaction = [...allQuaction];
        // closeAllQuaction.splice(index, 1);
        // setAllQuaction(closeAllQuaction);
      }
    });

    console.log(newQuactionArray);
    // set all quaction count
    setAllQuactionCount(newQuactionArray.length);

    // upload all files and set all quactions to redux
    dispatch(fileUpload(newQuactionArray));
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
                  setAddPaperState();
                }}
              />
            </BootstrapTooltip>
          </span>
        </Col>
      </Row>

      {/* title */}
      <Row className="justify-content-center mt-2 mb-3">
        <h4 id="styles.titleSize" className=" font-weight-bold p-1">
          Add Paper
        </h4>
      </Row>

      <form onSubmit={handleSubmit}>
        {/* button (add quaction button , submit button) row */}
        <div className="display-flex">
          {/* Add quaction button */}
          <Button
            className={cx("cursor-pointer display-flex align-items-center",styles.AddQuactionBtn)}
            size="sm"
            onClick={handleAddQuactionBtn}
          >
            <span className="btn-inner--icon">
              {/* <i className="fa fa-sign-out mr-2" /> */}
              <Add className="mr-2" />
            </span>
            <span className="text-capitalize ml-1">
                Add Quaction
              </span>
          </Button>

          {/* submit button */}
          {!allQuaction.length == 0 && (
            <Button
              className={cx("background-primary cursor-pointer display-flex align-items-center ml-auto",styles.submitBtn)}
              type="submit"
              size="sm"
            >
              <span className="text-capitalize text-white">
                Submit
              </span>
          </Button>
) }           
        </div>

        {/* paper details form */}
        <PaperDetailsFrom
          setPaperName={setPaperName}
        ></PaperDetailsFrom>

        {/* Added Quactions */}
        <div className="mt-3" id="addedQuactions">
          {allQuaction.map((quactionObj) => (
            <AddQuaction
              key={quactionObj.id}
              id={quactionObj.id}
              handleImageAdd={handleImageAdd}
              imageLocation={quactionObj?.file?.imgLocation}
              handleDeleteQuactionBtn={handleDeleteQuactionBtn}
            ></AddQuaction>
          ))}
        </div>
      </form>
    </>
  );
};

export default AddPaperComp;
