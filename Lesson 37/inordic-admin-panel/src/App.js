import './App.css';
//Импортируем созданный роутер.
import Router from './utils/router';
//Импортируем провайдер для роутера.
import {RouterProvider} from 'react-router-dom'
//Импортируем меню
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    //Добавим состояния для компонента.
    //this.state атрибут React.Component, доступен для инициализации в конструкторе класса.
    
  }
  render() {
    return (
    <div className="App">
        <RouterProvider router={Router} />
    </div>
    );
  }
}

export default App;
