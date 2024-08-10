'use client';
import styles from './styles/Home.module.css';
import CardDetails from './components/CardDetails';
import CardList from './components/CardList';
import { useState } from 'react'

const Home = () => {

  const [selectedUser, setSelectedUser] = useState(null);

  

  return (
    <main className={styles['main-container']}>
      <div className={styles['card-list']}>
        <CardList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>
      <div className={styles['card-details']}>
        <CardDetails  user={selectedUser} />
      </div>
    </main>
  );
};

export default Home;
