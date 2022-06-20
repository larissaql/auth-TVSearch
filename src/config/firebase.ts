import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5R8W5TwbamK9hS37-qZVp6f1gDaVG2qY",
  authDomain: "ex-autenticacao.firebaseapp.com",
  projectId: "ex-autenticacao",
  storageBucket: "ex-autenticacao.appspot.com",
  messagingSenderId: "469411700524",
  appId: "1:469411700524:web:bb61bb0e75dfb910f65689"
};

export const firebaseApp = initializeApp(firebaseConfig);
