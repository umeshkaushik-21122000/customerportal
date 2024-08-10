'use client';
import { useState, useEffect } from 'react';

const fetchPhotos = async (page:number) => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`);
  return response.json();
};

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAndUpdatePhotos = async () => {
      setLoading(true);
      try {
        const data = await fetchPhotos(page);
        setPhotos(data); 
      } catch (err:any) {
        setError(err);
      }
      finally{
         setLoading(false);
      }
    };

    fetchAndUpdatePhotos(); // Fetch photos initially

    const intervalId = setInterval(() => {
      setPage(prevPage => prevPage + 1); // Update page number
    }, 10000); // 10 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [page]);

  return { photos, loading, error };
};
