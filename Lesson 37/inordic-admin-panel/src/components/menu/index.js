//Импортируем реакт
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './index.css';

import {menuItemShape} from '../../shapes/menu-item'

class Menu extends React.Component{
    constructor(){
        super()
    }
    //Метод который есть у любого компонента в реакте для отображжения шаблона
    render(){
        //Декомпозируем поле menu из объекта this.props
        const {menu} = this.props
        //Задача - вывести элементы меню на верстку
        //1) Перебрать массив menu
        //2) выводить тэе <a> с названием и ссылкой
        return (
            <div className='menu'>
                <a className="logo-full" href="/"></a>
                <div className='menu__content'>
                    <h1 className='menu__title'>
                        Меню
                    </h1>
                    <ul>
                    {
                        menu.map((menuItem, index) => (
                                <li key={index} >
                                    <Link className='menu__link' to={menuItem.link}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                            )
                        )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
//Экспортируем наш компонент

//Проверка входящих в компонент типов
Menu.propTypes = {
    menu: PropTypes.arrayOf(
        menuItemShape
    )
}
export default Menu