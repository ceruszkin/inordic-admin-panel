//Импортируем реакт
import React from 'react'
import {Outlet} from 'react-router-dom'

import './index.css'

/**
 * Goods - компонент статики старицы Ассортимент
 */
class Goods extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <h1>Ассортимент</h1>
                <Outlet />
            </div>
        )
    }
}
//Экспортируем наш компонент
export default Goods