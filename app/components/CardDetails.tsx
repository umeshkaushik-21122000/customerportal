'use client';
import { usePhotos } from '../hooks/usePhotos';
import Skeleton from './Skeleton';
import Image from 'next/image';
import styles from '../styles/CardDetail.module.css';

const CardDetails = ({user}:any) => {
  const { photos, loading, error } = usePhotos();

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>Error loading photos</div>;
  }

  const fullName = user!=null&&user!=undefined&&`${user.name?.title} ${user.name.first} ${user.name.last}`;
  const address = user!=null&&user!=undefined&&`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
  return (
    <div className={styles['container']}>
{       user!=null&&user!=undefined&&  <div className={styles.details}>
                <h3 className={styles.h3}>{fullName}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {address}</p>
            </div>}
      <div className={styles['photo-grid']}>
        {photos.map((photo: any) => (
          <div key={photo.id} className={styles['photo-card']}>
            <Image
            className={styles['object-cover']}
              src={photo.download_url}
              alt={photo.author}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;

