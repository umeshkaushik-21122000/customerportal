"use client";
import { usePhotos } from "../hooks/usePhotos";
import Skeleton from "./SkeletonCardDetails";
import Image from "next/image";
import styles from "../styles/CardDetail.module.css";
import { memo } from "react";
import CustomerDetails from "./CustomerDetails";

const CardDetails = memo(({ user }: any) => {
  const { photos, loading, error } = usePhotos(user);

  if (loading) {
    return <Skeleton user={user} />;
  }

  if (error) {
    return <div>Error loading photos</div>;
  }

  return (
    <div className={styles["container"]}>
      {user != null && user != undefined && (
        <CustomerDetails user={user} />
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