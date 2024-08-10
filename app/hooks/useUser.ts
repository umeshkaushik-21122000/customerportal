'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  return data;
};

export const useUsers = (setSelectedUser: any) => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const firstCall=useRef(false);

  const loadMoreUsers = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newUsers = await fetchUsers();
      const data = newUsers.results;

      if (!firstCall.current) {
        firstCall.current=true;
        setSelectedUser(data[0]);
      }
      setUsers((prev: any) => [...prev, ...data]);

    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [loading, users]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loadMoreUsers();
        }
      },
      { threshold: 1.0 } // Adjust as needed (1.0 means the target must be fully visible)
    )
  );

  const limitScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentObserver = observer.current;
    const currentLimitScrollRef = limitScrollRef.current;

    if (currentLimitScrollRef) {
      currentObserver.observe(currentLimitScrollRef);
    }

    return () => {
      if (currentLimitScrollRef) {
        currentObserver.unobserve(currentLimitScrollRef);
      }
    };
  }, [limitScrollRef, loadMoreUsers]);

  return { users, loading, error, limitScrollRef };
};
