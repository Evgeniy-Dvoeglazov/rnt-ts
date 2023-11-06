import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import photo from './pictures/photo_1.jpg'
import './components/ex_1';
import './components/ex_2';
import './components/ex_3';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <h1 className='title'>Hello, world!</h1>
    <img src={photo} />
  </React.StrictMode>
);

