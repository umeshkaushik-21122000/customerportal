'use client';
import React, { useEffect } from 'react';
import Card from './Card';
import { useUsers } from '../hooks/useUser';
import styles from '../styles/CardList.module.css';
import SkeletonCardList from './SkeletonCardList';

const CardList = ({selectedUser,setSelectedUser}:any) => {
  const { users, loading, error } = useUsers(setSelectedUser);

  const handleSelectUser = (user:any) => {
    setSelectedUser(user);
  };


  if(loading) return <SkeletonCardList />

  if (error) return <div>Error loading users</div>;

  return (
    <div id="anchor-parent" className={styles.cardList}>
      {users.map((user:any,index:number) => (
        <Card id={index===users.length-1?"scroll-anchor":index} isSelected={selectedUser!=null?selectedUser.cell===user.cell:false} onClick={()=>handleSelectUser(user)} key={user.cell} user={user} />
      ))}
    </div>
  );
};

export default CardList;
