import React from 'react';
import Image from 'next/image';
import styles from '../styles/CustomerDetails.module.css';
import SkeletonCustomerDetailHeading from './SkeletonCustomerDetailHeading';
import { User } from '../Interfaces/types';

interface CustomerDetailsProps {
  user: User | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ user }) => {
  if (!user) return <SkeletonCustomerDetailHeading />;

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;

  return (
    <div className={styles.customerDetails}>
      <div>
        <h3>{fullName}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {address}</p>
      </div>
      <div>
        <Image
          src={user.picture.large}
          alt="Customer"
          height={100}
          width={100}
          className={styles.fullCircle}
        />
      </div>
    </div>
  );
};

export default CustomerDetails;
