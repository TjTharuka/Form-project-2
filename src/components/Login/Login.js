import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';
import cx from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Login.module.scss';
import InputField from '../commons/InputField/InputField';
import InputError from '../commons/InputError/InputError';
import { loginSchema } from '../../validations/validations';
import { loginUser } from '../../actions/auth/auth';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // Visibility click
  const passwordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const formSubmit = (data) => {
    const { email, password } = data;
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <main className={styles.mainWrapper}>
        <section className={cx('section section-shaped', styles.bgWrapper)}>
          <div
            id={styles.background}
            className="shape shape-style-1 "
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div id={styles.foreground}>
            <div id={styles.formContainer}>
              <Row className={cx('justify-content-center h-100')}>
                <Col sm="12" lg="5">
                  <Card className="bg-secondary shadow border-0 h-100">
                    <CardHeader className="bg-white">
                      <div
                        className={cx(
                          'font-weight-bold text-center',
                          styles.titleText
                        )}
                      >
                        Sign In
                      </div>
                    </CardHeader>
                    <CardBody className="py-lg-5 position-relative">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={formSubmit}
                        validationSchema={loginSchema}
                      >
                        <Form id={styles.form}>
                          <FormGroup className="py-2">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="email">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="email"
                                    type="text"
                                    id="email"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage name="email" component={InputError} />
                          </FormGroup>

                          <FormGroup className="py-2">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <VpnKeyOutlinedIcon
                                    style={{ fontSize: '1rem' }}
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="password">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    visibility={passwordVisibility}
                                    placeholder="password"
                                    type="password"
                                    id="password"
                                    onClick={passwordVisibilityChange}
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="password"
                              component={InputError}
                            />
                          </FormGroup>

                          <div className="col-md-12 row d-flex justify-content-between align-items-center pt-4  px-0 mx-0">
                            <div className="col-12 px-0 d-flex justify-content-center">
                              <Button
                                id="signinButton"
                                className="py-2"
                                outline
                                color="primary"
                                type="submit"
                              >
                                Sign In
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </Formik>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col className="text-center" xs="12">
                      <Link to="/signup" className="text-light">
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
