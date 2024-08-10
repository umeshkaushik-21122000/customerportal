'use client';
import { useState, useEffect } from 'react';

const fetchPhotos = async (page:number) => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`);
  return response.json();
};

export const usePhotos = (user:any) => {
  const [photos, setPhotos] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchAndUpdatePhotos = async () => {
      setLoading(true);
      try {
        const RandomNumber=Math.floor(Math.random()*100);
        const data = await fetchPhotos(RandomNumber);
        setPhotos(data); 
      } catch (err:any) {
        setError(err);
      }
      finally{
           setLoading(false);
      }
    };

     fetchAndUpdatePhotos();

    const intervalId = setInterval(() => {
      fetchAndUpdatePhotos();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [user]);

  return { photos, loading, error };
};
