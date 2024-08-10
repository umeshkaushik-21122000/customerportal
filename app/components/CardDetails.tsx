"use client";
import { usePhotos } from "../hooks/usePhotos";
import Skeleton from "./SkeletonCardDetails";
import Image from "next/image";
import styles from "../styles/CardDetail.module.css";
import { memo } from "react";

const CardDetails = memo(({ user }: any) => {
  const { photos, loading, error } = usePhotos(user);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <div>Error loading photos</div>;
  }

  const fullName =
    user != null &&
    user != undefined &&
    `${user.name?.title} ${user.name.first} ${user.name.last}`;
  const address =
    user != null &&
    user != undefined &&
    `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
  return (
    <div className={styles["container"]}>
      {user != null && user != undefined && (
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
      )}
      <div className={styles["photo-grid"]}>
        {photos.map((photo: any) => (
          <div key={photo.id} className={styles["photo-card"]}>
            <Image
              className={styles["object-cover"]}
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
});

export default CardDetails;
