import React from 'react';
import styles from '../styles/skeletonCardDetails.module.css';
import CustomerDetails from './CustomerDetails';
import SkeletonCustomerDetailHeading from './SkeletonCustomerDetailHeading';

const Skeleton = ({ user }: any) => {
  return (
    <div>
      <div className={styles["customer-details-section"]}>
        {user != null ? (<CustomerDetails user={user} />) :
          (<SkeletonCustomerDetailHeading />)}
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
