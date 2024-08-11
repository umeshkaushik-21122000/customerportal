'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { User,UsersResponse } from '../Interfaces/types';


const fetchUsers = async (): Promise<UsersResponse>  => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  return data;
};

export const useUsers = (setSelectedUser: (user: User) => void) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const firstCall = useRef<boolean>(false);
  
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

  useEffect(()=>{
    loadMoreUsers();
  },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
           loadMoreUsers();
        }
      },
      {
        root: document.getElementById('anchor-parent'),
        rootMargin: '20px',
        threshold: 1.0
      }
    );

    const target = document.querySelector('#scroll-anchor');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [loadMoreUsers]);

  return { users, loading, error };
};
