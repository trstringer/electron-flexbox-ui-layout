import React from 'react';
import styles from './WorkAreaCanvas.css';
import WorkAreaCanvasLeft from './WorkAreaCanvasLeft';
import WorkAreaCanvasRight from './WorkAreaCanvasRight';

const WorkAreaCanvas = () => {
  return (
    <div className={styles.container}>
      <WorkAreaCanvasLeft />
      <WorkAreaCanvasRight />
    </div>
  );
};

export default WorkAreaCanvas;
