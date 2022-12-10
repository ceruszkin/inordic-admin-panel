//Импортируем реакт.
import React from "react";
import goodsJSON from "../../stub/goods.json"
import GoodItem from '../../components/good-item'
import "./index.css"

const inputSearchRef = React.createRef();

class Goods extends React.Component{
    constructor(){
        super()
        this.state = {
            goods: goodsJSON,
            filteredGoods: null,
        }
    }
    findGood(event){
        //Так состояния в Реакте не обновляются.
        //this.state.goods = []
        //Реакт использует обертку для обновления состояния.
        //С помощью setState работает с состоянием в Реакте.

        //Нужно получить текст из инпута.
        const valueFromSearchInput = inputSearchRef?.current?.value
        console.log(valueFromSearchInput)

        const searcherElement = this.state.goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )

        console.log(searcherElement)

        if(searcherElement == '' || searcherElement == undefined) {
            this.setState({
                goods: goodsJSON
            })}else{

            this.setState({
                filteredGoods: [searcherElement]
            })}

        /*
        Получить текст из инпута в этом методе.
        Есть 2 варианта:
        1. Использовать реф.
        2. Использовать форму.
        Подсказка: Посмотреть, как мы получали данные с формы во VUE.
        */
        }
    }
    //Метод, который есть у любого компонента в реакте для отображения шаблона.
    render(){
        const goods = this.state.filteredGoods || this.state.goods
        return(
            <div>
                <h1>Goods</h1>
                <div>
                    ПОИСК
                    <input ref={inputSearchRef} type="text" />
                    <input type="submit" onClick={ (event) => {this.findGood(event)} } />
                </div>
                <div className="card-list">
                {
                
                    
                    goods.map(good => 
                        <GoodItem 
                        key={good.ID}
                        data={good} />
                    )
                
                }
                </div>
            </div>
        )
    }

export default Goods