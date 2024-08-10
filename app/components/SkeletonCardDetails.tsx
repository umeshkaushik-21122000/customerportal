import React from 'react';
import styles from  '../styles/skeleton.module.css'; 

const Skeleton = () => {
  return (
    <div>
      <div className={styles["skeleton-details"]}></div>
      <div className={styles["skeleton-grid"]}>
      {[...Array(9)].map((_, index) => (
        <div key={index} className={styles["skeleton-item"]}></div>
      ))}
    </div>
    </div>

  );
};

export default Skeleton;
