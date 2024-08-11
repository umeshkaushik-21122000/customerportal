import React, { memo } from 'react'
import Image from 'next/image';
import styles from "../styles/CardDetail.module.css";

const CustomerDetails = memo(({user}:any) => {

    const fullName =
    user != null &&
    user != undefined &&
    `${user.name?.title} ${user.name.first} ${user.name.last}`;
  const address =
    user != null &&
    user != undefined &&
    `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
 
  return (
    <div className={styles['customer-details']}>
    <div>
      <h3>{fullName}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {address}</p>
    </div>
    <div>
      <Image src={user.picture.large} alt="img" height={100} width={100} className={styles["full-circle"]} />
    </div>
  </div>
  )
});

export default CustomerDetails;