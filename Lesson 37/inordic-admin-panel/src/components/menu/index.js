//Импортируем реакт.
import React from "react";

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
            <div>
                <h1>Menu</h1>
            {
                menu.map((menuItem, index) => {
                    console.log(menuItem)
                    return (
                        <a key={index} href={menuItem.link}>
                            {menuItem.text}
                        </a>
                    )
                })
            }
            </div>
        )
    }
}

export default Menu