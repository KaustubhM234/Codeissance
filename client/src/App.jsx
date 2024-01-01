import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import "./Components/style/Header.css";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function App() {
  
useEffect(() => {
  alanBtn({
      key: '04b3331df09aff384c669193e471d13d2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        console.log(commandData);
      }
  });
}, []);
  return (
    <>
      <Layout />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
}

