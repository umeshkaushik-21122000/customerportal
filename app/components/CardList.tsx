'use client';
import React from 'react';
import Card from './Card';
import { useUsers } from '../hooks/useUser';
import styles from '../styles/CardList.module.css';
import SkeletonCardList from './SkeletonCardList';
import {User} from '../Interfaces/types';

interface CardListProps {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

const CardList: React.FC<CardListProps> = ({ selectedUser, setSelectedUser }) => {
  const { users, loading, error } = useUsers(setSelectedUser);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  if (loading && users.length === 0) return <SkeletonCardList />;
  
  if (error) return <div className={styles.loading}>Error loading users</div>;

  return (
    <div id="anchor-parent" className={styles.cardList}>
      {users.map((user:User) => (
        <Card
          id={user.cell}
          isSelected={selectedUser ? selectedUser.cell === user.cell : false}
          onClick={() => handleSelectUser(user)}
          key={user.cell}
          user={user}
        />
      ))}
      <div id="scroll-anchor" className={styles.scrollAnchor}></div>
    </div>
  );
};

export default CardList;
