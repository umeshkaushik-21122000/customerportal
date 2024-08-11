import React from 'react';
import styles from '../styles/skeletonCardDetails.module.css';
import CustomerDetails from './CustomerDetails';
import SkeletonCustomerDetailHeading from './SkeletonCustomerDetailHeading';
import { CardDetailsProps } from '../Interfaces/types';

const Skeleton: React.FC<CardDetailsProps> = ({ user }) => {
  return (
    <div>
      <div className={styles.customerDetailsSection}>
        {user ? <CustomerDetails user={user} /> : <SkeletonCustomerDetailHeading />}
      </div>
      <div className={styles.skeletonGrid}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={styles.skeletonItem}></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
