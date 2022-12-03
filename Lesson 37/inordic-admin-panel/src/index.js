import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Импортируем созданный роутер.
import Router from './utils/router';
//Импортируем провайдер для роутера.
import {RouterProvider} from 'react-router-dom'
//Импортируем меню
import Menu from "./components/menu"

const root = ReactDOM.createRoot(document.getElementById('root'));
//Заменяем обычный еомпонент на RouterProvider  и передаем созданный ранее нами роутер в пропс router.
root.render(
  <React.StrictMode>
    <Menu />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
