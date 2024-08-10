import React from 'react'
import styles from '../styles/skeletonCardList.module.css';
const SkeletonCardList = () => {
    return (
        <div className={styles['cardList']}>
            {Array(7).fill(null).map((_, index) => (
                <div key={index} className={styles['card']}>
                    <div className={styles['details']}>
                        <div className={styles['detail-heading']}></div>
                        <div className={styles['detail']}></div>
                        <div className={styles['detail']}></div>
                        <div className={styles['detail']}></div>
                    </div>
                    <div className={styles.imageCircle}>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonCardList;




