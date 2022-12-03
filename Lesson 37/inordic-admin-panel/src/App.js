import './App.css';
//Импортируем созданный роутер.
import Router from './utils/router';
//Импортируем провайдер для роутера.
import {RouterProvider} from 'react-router-dom'
//Импортируем меню
import Menu from "./components/menu"
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    //Добавим состояния для компонента.
    //this.state атрибут React.Component, доступен для инициализации в конструкторе класса.
    this.state = {
      menu: [
        {
          text: 'Main',
          link: '/'
        },
        {
          text: 'Goods',
          link: '/goods'
        }
      ]
    }
  }
  render() {
    return (
    <div className="App">
      <React.StrictMode>
        <Menu menu={this.state.menu} />
        <RouterProvider router={Router} />
      </React.StrictMode>
    </div>
    );
  }
}

export default App;
