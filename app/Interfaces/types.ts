// types.ts

export interface Location {
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

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Dob {
    date: string;
    age: number;
}

export interface Registered {
    date: string;
    age: number;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface User {
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

export interface UsersResponse {
    results: User[];
}

export interface CardProps {
    user: User;
    onClick: () => void;
    isSelected: boolean;
    id: string;
}

export interface CardDetailsProps {
    user: User | null;
  }

  export interface Photo {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}