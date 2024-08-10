// components/Card.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Card.module.css';

const Card = ({ user,onClick,isSelected }: any) => {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;

    return (
        <div onClick={onClick} className={isSelected?styles['card-selected']:styles['card']}>
            <div className={styles.details}>
                <h3 className={styles.h3}>{fullName}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {address}</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={user.picture.large}
                    alt={fullName}
                    width={50}
                    height={50}
                    className={styles.image}
                />
            </div>

        </div>
    );
};

export default Card;
