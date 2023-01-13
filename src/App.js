import './App.css';
import logo from './logo.png';
import React from 'react';
import video from './video.mp4'

export default function App() {
  return (
    <div className='main'>
      <video className='video' src={video} autoPlay muted={true} loop={true}></video>
      <div className='container'>
         <img className='logo' src={logo} alt="sign" />
      </div>
    </div>
  )
}
