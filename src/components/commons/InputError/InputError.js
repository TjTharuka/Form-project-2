import React from 'react';
import cx from 'classnames';
import styles from './InputError.module.scss';

function InputError(props) {
  const { children } = props;
  return <p className={cx(styles.error, 'mt-0 mb-2')}>{children}</p>;
}

export default InputError;
