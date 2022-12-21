import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import './index.css'
import GoodItem from '../good-item'
import {Loader} from '../loader'

import goodsJSON from '../../stub/goods.json'
//Создали реф для получения данных введенные в поле поиска
const inputSearchRef = React.createRef();

/**
 * GoodList - компонентсписка карточек товаров
 */
/*
class GoodList extends React.Component{
    constructor(){
        super()
        this.state = {
            goods: [],
            filteredGoods: null,
            isLoading: true,
        }

        // Метод bind жестко закрепляет контекст внутри метода, который мы в bind передаем
        // Жестко закрепили контекст в методе
        // this.delGood = this.delGood.bind(this);
    }
    findGood(event){
        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        console.log(valueFromSearchInput)
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = this.state.goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
        if(searcherElement == '' || searcherElement == undefined) {
            this.setState({
                goods: goodsJSON
            })
        }else{
            //Обновляем состояние компонента
            this.setState({
                filteredGoods: [searcherElement]
            })
        }

    }
    //Превратив метод в стрелочную функцию, мы смогли сохранить контекст, даже пробросивм метод в другой компонент
    delGood = (id, context) => {

        console.log(`Удаляем товар ${id}`)
        console.log(`context`, context)
        console.log(`this`, this)
        //console.log(`hello`, hello)

        const goods = this.state.filteredGoods || this.state.goods
        const newFilteredGoods = goods.filter((good) =>
            good.ID !== id
        )

        this.setState({
            goods: newFilteredGoods,
            filteredGoods: newFilteredGoods
        })
    }

    _delComponent(){
        console.log('Удаляем компонент GoodList')
        //Приверить актуальное удаление товаров
        ReactDOM.unmount(
            document.getElementById("root")
        ) 
    }
    // Является устаревший, но до сих пор есть в классовых компонентах реакта
    componentWillMount() {
        console.log("componentWillMount метод работающий до этапа монтирования")
    }
    componentDidMount() {
        console.log("componentDidMount метод работающий после  этапа монтирования")
        // тут мы будем запрашивать данные из АПИ и записывать в состояние
        //Метод для реализации ожидания, перед отработкой алгоритма
        //https://learn.javascript.ru/settimeout-setinterval
        //Эмитация загрузки
        // ДЗ - сделать отдельный(красивый), компонент для загрузки
        setTimeout(() => {
            this.setState({
                goods: goodsJSON,
                isLoading: false
            })
        }, 1000);
    }
    // Устаревший
    componentWillUpdate() {
        console.log("componentWillUpdat срабатывает после обновлении компонента")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate срабатывает перед обновлением компонента")
    }
    //Хук для переххвата ошибок, не работает с новым роутером
    /*componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log('error', error)
        console.log('errorInfo', errorInfo)
    }*/
    /*
    render(){
        //Ищем товары сначало в отфильтрованных, если их там нет, то в обычном блоке
        const goods = this.state.filteredGoods || this.state.goods
        if (!goods) {
            throw new Error('Не удалось, получить товары от сервера');
        }

        //Вывод лоадера, во время загрузки компонента
        if(this.state.isLoading){
            return <Loader />
        }

        return(
            <React.Fragment>
                <div>
                    ПОИСК
                    <input ref={inputSearchRef} type='text'/> 
                    <input type='submit' onClick={(event) => {this.findGood(event)}} value='Найти'/>
                    <button onClick={this._delComponent.bind(this)} >Удалить компонент GoodList</button>
                </div>
                <div className='card-list'>
                {      
                    goods.map(good => 
                        <GoodItem 
                            key={good.ID}
                            data={good}
                            delGood={this.delGood}
                            goodListContext={this}
                        />
                    )
                }
                </div>
            </React.Fragment>
        )
    }
} */
//export default GoodList

export function GoodList(){
    const [goods, setGoods] = useState([])
    const [filteredGoods, setFilteredGoods] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const [currentCount, setCurrentCount] = useState(0)

    useEffect( () => 
    {console.log("GoodList has loaded.")
    setTimeout(() => {
        /*this.setState({
            goods: goodsJSON,
            isLoading: false
        })*/
        setGoods(goodsJSON)
        setIsLoading(false)
    }, 1000);
    }, 
    [])

    const findGood = (event) => {
        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
        if(searcherElement == '' || searcherElement == undefined) {
            setGoods(goodsJSON)
        }else{
            //Обновляем состояние компонента
            
            setFilteredGoods([searcherElement])
        }

    }

    const delGood = (id) => {

        const newGoods = goods.filter((good) =>
            good.ID !== id
        )

        setGoods(newFilteredGoods)

        const newFilteredGoods = filteredGoods.filter((good) =>
            good.ID !== id
        )

        setFilteredGoods(newFilteredGoods)

    }

    const delCurrentGood = () => {
        
    }

    if(isLoading){
        return <Loader />
    }

    const currentGoods = filteredGoods || goods

    return(
        <React.Fragment>
            <div>
                ПОИСК
                <input ref={inputSearchRef} type='text'/> 
                <input type='submit' onClick={(event) => findGood(event)} value='Найти'/>
                <button onClick={(event) => delCurrentGood(event)}>Delete {currentCount} goods</button>
            </div>
            <div className='card-list'>
            {      
                currentGoods.map(good => 
                    <GoodItem 
                        key={good.ID}
                        data={good}
                        delGood={delGood}
                        goodListContext={this}
                    />
                )
            }
            </div>
        </React.Fragment>
    )
}