//Импортируем реакт.
import React from "react";
import PropTypes from "prop-types"
//import { Link } from "react-router-dom";
import './index.css';

import {menuItemShape} from '../../shapes/menu-item'

class Menu extends React.Component{
    constructor(){
        super()
    }
    //Метод, который есть у любого компонента в реакте для отображения шаблона.
    render(){
        const {menu} = this.props
        //Задача -- вывести элеиенты меню на верстку.
        //1) Перебрать массив Menu.
        //2) Выводить тег <а> с названием и ссылкой.
        return(
            <div className="menu">
                <div className="menu__content">
                    <h1 className="menu__title">
                        Menu
                    </h1>
                    <ul>
                    {
                        menu.map((menuItem, index) => {
                            return (
                                <li key = {index}>
                                    <a className="menu__link" href={menuItem.link}>
                                        {menuItem.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

//Экспортируем компонент.

//Проверка входящих в компонент типов.
Menu.propTypes = {
    menu: PropTypes.arrayOf(
        menuItemShape
    )
}
export default Menu