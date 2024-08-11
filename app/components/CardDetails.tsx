"use client";
import { usePhotos } from "../hooks/usePhotos";
import Skeleton from "./SkeletonCardDetails";
import Image from "next/image";
import styles from "../styles/CardDetail.module.css";
import CustomerDetails from "./CustomerDetails";
import { CardDetailsProps,Photo } from "../Interfaces/types";



const CardDetails: React.FC<CardDetailsProps>= ({ user }) => {
  const { photos, loading, error } = usePhotos(user);

  if (loading) {
    return <Skeleton user={user} />;
  }

  if (error) {
    return <div>Error loading photos</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className={styles.container}>
      <CustomerDetails user={user} />
      <div className={styles.photoGrid}>
        {photos.map((photo:Photo) => (
          <div key={photo.id} className={styles.photoCard}>
            <Image
              className={styles.objectCover}
              src={photo.download_url}
              alt={photo.author}
              height={150}
              width={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
