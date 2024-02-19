import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDciqMINY2AMkCSzdlC3MV9TNV9IAzBJyo',
    authDomain: 'digiomed.firebaseapp.com',
    databaseURL: 'https://digiomed-default-rtdb.firebaseio.com/',
    projectId: 'digiomed',
    storageBucket: 'digiomed.appspot.com',
    messagingSenderId: '355692652092',
    appId: '1:355692652092:web:4d7420e90a203d9edd8539',
    measurementId: 'G-P952W51DFM',
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
