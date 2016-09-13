import React from 'react';
import styles from './WorkArea.css';
import WorkAreaNav from './WorkAreaNav';
import WorkAreaCanvas from './WorkAreaCanvas';

const WorkArea = () => {
  return (
    <div className={styles.container}>
      <WorkAreaNav />
      <WorkAreaCanvas />
    </div>
  );
};

export default WorkArea;
