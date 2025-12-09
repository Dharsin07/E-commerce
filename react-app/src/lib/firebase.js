import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvbT3Ri0S1NdffMQqwWENJBTDwD8jlrAo',
  authDomain: 'luxzant.firebaseapp.com',
  projectId: 'luxzant',
  storageBucket: 'luxzant.firebasestorage.app',
  messagingSenderId: '696545673252',
  appId: '1:696545673252:web:d5aef48aeab33302d158b1',
  measurementId: 'G-SFZ6K7681T',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
