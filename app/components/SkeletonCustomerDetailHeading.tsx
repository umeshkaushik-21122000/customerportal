import React from 'react'
import styles from '../styles/SkeletonCustomerDetailHeading.module.css';
const SkeletonCustomerDetailHeading = () => {
  return (
    <> <div className={styles["customer-details"]}>
            <div className={`${styles["customer-name"]} ${styles["customer-detail"]}`}>
            </div>
            <div className={`${styles["customer-email"]} ${styles["customer-detail"]}`}>
            </div>
            <div className={`${styles["customer-phone"]} ${styles["customer-detail"]}`}>
            </div>
            <div className={`${styles["customer-address"]} ${styles["customer-detail"]}`}>
            </div>
          </div>
            <div className={`${styles["customer-image"]} ${styles["customer-detail"]}`}></div></>
  )
}

export default SkeletonCustomerDetailHeading