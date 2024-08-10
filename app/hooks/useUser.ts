'use client';
import { useState, useEffect, useCallback } from 'react';

const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  return data;
};

export const useUsers = (setSelectedUser:any) => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreUsers = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newUsers = await fetchUsers();
      const data=newUsers.results;
      if(users.length==0){
        setSelectedUser(data[0]);
      }
      setUsers((prev:any)=> [...prev, ...data]);

    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMoreUsers();
  }, [loadMoreUsers]);


  return { users, loading, error };
};
