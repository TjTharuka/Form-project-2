import React from 'react';
import cx from 'classnames';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={cx(styles.loader)}>
      <img
        className={cx(styles.image)}
        alt="loading"
        src={require('../../assets/img/icons/common/loading.gif')}
      />
    </div>
  );
};

export default Loading;
