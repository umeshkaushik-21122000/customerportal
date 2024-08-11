import React from 'react';
import styles from '../styles/SkeletonCustomerDetailHeading.module.css';

const SkeletonCustomerDetailHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.customerDetails}>
        <div className={styles.customerName}></div>
        <div className={styles.customerEmail}></div>
        <div className={styles.customerPhone}></div>
        <div className={styles.customerAddress}></div>
      </div>
      <div className={styles.customerImage}></div>
    </div>
  );
}

export default SkeletonCustomerDetailHeading;
