"use client"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function page(){
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}