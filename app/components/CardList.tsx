'use client';
import React, { useEffect } from 'react';
import Card from './Card';
import { useUsers } from '../hooks/useUser';
import styles from '../styles/CardList.module.css';

const CardList = ({selectedUser,setSelectedUser}:any) => {
  const { users, loading, error } = useUsers(setSelectedUser);

  const handleSelectUser = (user:any) => {
    setSelectedUser(user);
  };



  if (error) return <div>Error loading users</div>;

  return (
    <div id="limited-scroll" className={styles.cardList}>
      {users.map((user:any) => (
        <Card isSelected={selectedUser!=null?selectedUser.cell===user.id:false} onClick={()=>handleSelectUser(user)} key={user.cell} user={user} />
      ))}
      {loading && <div className={styles.loading}>Loading...</div>}
      <div id="scroll-anchor" className={styles.scrollAnchor}></div>
    </div>
  );
};

export default CardList;
