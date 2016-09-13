import React from 'react';
import styles from './WorkAreaNav.css';
import WorkAreaNavTop from './WorkAreaNavTop';
import WorkAreaNavBottom from './WorkAreaNavBottom';

const WorkAreaNav = () => {
  return (
    <div className={styles.container}>
      <WorkAreaNavTop />
      <WorkAreaNavBottom />
    </div>
  );
};

export default WorkAreaNav;
