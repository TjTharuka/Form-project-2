import cx from 'classnames';
import { Field, Form, Formik } from 'formik';
import SearchIcon from '@material-ui/icons/Search';
import {
  Input,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';

import React from 'react';
import styles from './Search.module.scss';

const Search = ({ searchData, searchStyles }) => {
  return (
    <div className={cx(searchStyles || styles.parentDiv)}>
      <Formik>
        <Form>
          <FormGroup className={styles.formGrp}>
            <InputGroup className={styles.inpGrp}>
              <Field name="search">
                {(props) => (
                  <Input
                    {...props}
                    type="text"
                    placeholder="search"
                    onChange={(event) => searchData(event.target.value)}
                    id="search-content"
                  />
                )}
              </Field>
              <InputGroupAddon addonType="append">
                <InputGroupText id={styles.inputGrpText}>
                  <SearchIcon style={{ fontSize: '1rem' }} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </Formik>
    </div>
  );
};

export default Search;
