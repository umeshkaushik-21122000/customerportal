'use client';
import styles from './styles/Home.module.css';
import CardDetails from './components/CardDetails';
import CardList from './components/CardList';
import { useState } from 'react';

interface Location {
  street: {
      number: number;
      name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
      latitude: string;
      longitude: string;
  };
  timezone: {
      offset: string;
      description: string;
  };
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface User {
  gender: string;
  name: {
      title: string;
      first: string;
      last: string;
  };
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: {
      name: string;
      value: string;
  };
  picture: Picture;
  nat: string;
}


const Home = () => {

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <main className={styles['main-container']}>
      
        <CardList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <div className={styles['card-details']}>
        <CardDetails  user={selectedUser} />
      </div>
    </main>
  );
};

export default Home;
