//Импортируем реакт.
import React from "react";
import goodsJSON from "../../stub/goods.json"
import GoodItem from '../../components/good-item'
import "./index.css"

class Goods extends React.Component{
    constructor(){
        super()
        this.state = {
            goods: goodsJSON
        }
    }
    findGood(event){
        //Так состояния в Реакте не обновляются.
        //this.state.goods = []
        //Реакт использует обертку для обновления состояния.
        //С помощью setState работает с состоянием в Реакте.

        //Нужно получить текст из инпута.
        console.log("event", event.target)
        this.setState({
            goods: []
        })

        /*
        Получить текст из инпута в этом методе.
        Есть 2 варианта:
        1. Использовать реф.
        2. Использовать форму.
        Подсказка: Посмотреть, как мы получали данные с формы во VUE.
        */
    }
    //Метод, который есть у любого компонента в реакте для отображения шаблона.
    render(){
        return(
            <div>
                <h1>Goods</h1>
                <div>
                    ПОИСК
                    <input type="text" />
                    <input type="submit" onClick={ (event) => {this.findGood(event)} } />
                </div>
                <div className="card-list">
                {
                
                    this.state.goods.map(good => {
                        return <GoodItem 
                        key={good.ID}
                        data={good} />
                    })
                
                }
                </div>
            </div>
        )
    }
}

export default Goods