// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB1L6EHmKVSmt5ekhogNKREXOinEJ9R0RI",
//   authDomain: "dragon-news-50a6a.firebaseapp.com",
//   projectId: "dragon-news-50a6a",
//   storageBucket: "dragon-news-50a6a.firebasestorage.app",
//   messagingSenderId: "219000963294",
//   appId: "1:219000963294:web:bd1b6198c4af675d4cc24f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
