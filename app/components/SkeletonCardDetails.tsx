import React from 'react';
import styles from '../styles/skeletonCardDetails.module.css';

const Skeleton = () => {
  return (
    <div>
      <div className={styles["customer-details-section"]}>
        <div className={styles["customer-details"]}>
          <div className={styles["customer-name"]}>
          </div>
          <div className={styles["customer-email"]}>
          </div>
          <div className={styles["customer-phone"]}>
          </div>
          <div className={styles["customer-address"]}>
          </div>
        </div>
        <div className={styles['customer-image']}></div>
      </div>

      <div className={styles["skeleton-grid"]}>
        {[...Array(9)].map((_, index) => (
          <div key={index} className={styles["skeleton-item"]}></div>
        ))}
      </div>
    </div>

  );
};

export default Skeleton;
