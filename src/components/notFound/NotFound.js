import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.body}>
    <div className={styles.wrapper}>
      <h1 id={styles.title}>404</h1>
      <p>Page not found</p>
      <Button outline color="secondary" id={styles.button}>
        <Link to="/">Home</Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
