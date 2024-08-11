'use client';
import styles from './styles/Home.module.css';
import CardDetails from './components/CardDetails';
import CardList from './components/CardList';
import { useState } from 'react';
import { User } from './Interfaces/types';




const Home = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  return (
    <main className={styles.mainContainer}>
      <CardList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <div className={styles.cardDetails}>
        <CardDetails user={selectedUser} />
      </div>
    </main>
  );
};

export default Home;
