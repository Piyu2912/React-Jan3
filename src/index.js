import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Time = () => {
  const time = new Date().toLocaleTimeString().toUpperCase();
  return  <div className='time'><h1> Time: {time} </h1></div>
}

setInterval(() => {
  root.render(
    <div className='main' style={{ backgroundColor: "#349eeb" }}>
      <h1>Web app Clock</h1>
      <Time />
    </div>
  );
}, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
