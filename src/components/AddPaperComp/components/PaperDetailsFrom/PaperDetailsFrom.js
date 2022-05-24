import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import cx from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPaperValidation, registerSchema } from '../../../../validations/validations';
import InputField from '../../../commons/InputField/InputField';
import InputError from '../../../commons/InputError/InputError';
import styles from './PaperDetailsFrom.module.scss';
import { FormControl, InputLabel, MenuItem, Select,SelectChangeEvent, TextField } from '@material-ui/core';

const Register = ({setPaperName,diffculty,setDiffculty,grade,setGrade}) => {
  const initialValues = {
    PaperName:"",
  };



  const handlediffcultyChange = (event) => {
    setDiffculty(event.target.value);
  };

  const handlegradeChange = (event) => {
    setGrade(event.target.value);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);


  // Event handlers
  const formSubmit = (data) => {
    const {
      name,
      age,
      nic,
      email,
      password,
      phone,
      role,
    } = data;
    const userData = {
      name:`${name.toString().trim()}`,
      age,
      nic,
      email,
      password,
      phone,
      role:"",
    };

  };

  
  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={formSubmit}
      validationSchema={addPaperValidation}
    >
      <Form className='mt-4'>
        {/* PaperName */}
        <label for="PaperName" className={cx(styles.inputLabel)}>Paper Name</label>
        <FormGroup>
          <InputGroup className={cx(styles.inputLabel)}>
            <Field name="PaperName">
              {(props) => {
                // set paper name to state
                setPaperName(props.field.value);
                return(
                  <>
                  <InputField
                  {...props}
                  placeholder="Paper Name"
                  type="text"
                  id="PaperName"
                  classes={cx(styles.inputTextField)}
                  />
                  </>
                )}}
            </Field>
          </InputGroup>
          <ErrorMessage name="PaperName" component={InputError} />
        </FormGroup>

        {/* diffculty */}
        <FormControl fullWidth className="mb-4 ml-1">
        <InputLabel id="demo-simple-select-label">diffculty</InputLabel>
        <Select
          labelId="diffculty"
          id="diffculty"
          onChange={handlediffcultyChange}
          value={diffculty}
        >
          <MenuItem id={'Normal'} value="Normal">Normal</MenuItem>
          <MenuItem id={'Easy'} value="Easy">easy</MenuItem>
          <MenuItem id={'Hard'} value="Hard">Hard</MenuItem>
        </Select>
        </FormControl>

        {/* Grade */}
        <FormControl fullWidth className="mb-4 ml-1">
        <InputLabel id="demo-simple-select-label">Grade</InputLabel>
        <Select
          labelId="role"
          id="role"
          label="Role"
          onChange={handlegradeChange}
          value={grade}
        >
          <MenuItem id={'9'} value="9">9</MenuItem>
          <MenuItem id={'10'} value="10">10</MenuItem>
          <MenuItem id={'11'} value="11">11</MenuItem>
          <MenuItem id={'12'} value="12">12</MenuItem>
        </Select>
        </FormControl>
      </Form>
    </Formik>
  </>
  );
};

export default Register;
