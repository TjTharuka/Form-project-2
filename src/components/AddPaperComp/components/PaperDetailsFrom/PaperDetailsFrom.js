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

const Register = ({setPaperName,setDiffculty,}) => {
  const initialValues = {
    PaperName:"",
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

      </Form>
    </Formik>
  </>
  );
};

export default Register;
