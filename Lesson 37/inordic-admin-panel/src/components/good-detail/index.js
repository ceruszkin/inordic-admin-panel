
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import {Loader} from '../loader'

import './index.css'

import goodsJSON from '../../stub/goods.json'

const formSaveRef = React.createRef();


//TODO Переделаем компонент на функциональный
/**
 * GoodList - Отдельная стараница с инормацией о товаре и возможностью ее редактировать
 */

/*
class GoodDetail extends React.Component{
    constructor(){
        super()
        this.state = {
            goods: goodsJSON,
        }
    }
    saveGood(event){
        console.log('Метод сохранения новых данных о товаре')
        event.preventDefault()
        console.log(event)

        //Используем форм дату, для получения и отправки формы на сервер , во всех наших формах
        //Получаем из рефа нативную(элемент из чистого JS) форму
        const nativeForm = formSaveRef.current
        //Передае форм дате нативную форму
        const formData = new FormData(nativeForm)

        //Так как в нашем апи ОТДЕЛЬНЫЕ роуты для работы с файлами, первы делом, мы ОТДЕЛЬНО получаем и отправляем фафл на сервер
        // Получим файл
        const file = formData.get('IMG')
        //TODO Отправить файлы с изоюбражением для сохранения, а дальше сохраняем оставшиеся данные 

        //Отправляем форм дату на сервер
    }
    render(){
        //Костыль для полуячения ID из адресной строки, для дальнейшего отображения товара
        const idGood = window.location.pathname.replace( '/goods/', '')
        // найти данные о конкретном товаре по id
        const good = this.state.goods.find( good => good.ID == idGood)
        // ДЗ 1
        // Починить инпуты для редактирования
        // Самый правильный и простой вариант, который был подсказан в консоли реактом - defaultValue

        // ДЗ 2 (усложненное)
        // Реализовать редактирование товара (!!без картинки!!)
        // - Записываем новые значение в поля
        // - нажимаем на кнопку сохранить 
        // - возвращаемся на главную страницу и видим отредактированный товар 

        //ВСПОМНИТЬ про жизненный цикл VUE

        //Используем дефолтный value, чтобы дальше его без труда менять
        //https://reactjs.org/docs/uncontrolled-components.html

        // Пример с отправкой файла с формы - https://refine.dev/blog/how-to-multipart-upload/
        return(
            <>
                <h1>{good.TITLE}</h1>
                <img className='detail-img' src={good.IMG}/>
                <form ref={formSaveRef} encType="multipart/form-data">
                    <p>Название товара: <input type='text' name='TITLE' defaultValue={good.TITLE}/></p>
                    <p>Описание товара: <input type='text' name='DISCR' defaultValue={good.DISCR}/></p>
                    <p>Цена товара: <input type='text' name='PRICE' defaultValue={good.PRICE}/></p>
                    <p>Количество товара: <input type='text' defaultValue={good.PRICE}/></p>
                    <p>Изображение товара: <input type='file' name="IMG"/></p>
                    <p><input type='submit' onClick={(event) => this.saveGood(event)} value='Сохранить'/></p>
                </form>
            </>
        )
    }
}

export default GoodDetail
*/

export function GoodDetail(){
    const [good, setGood] = useState(null)
    const [goods, setGoods] = useState(goodsJSON)

    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        const good = goods.find(good => good.ID == id)
        setTimeout(() => {
            setGood(good)
        }, 1000)
        setGood(good)
    }, [])

    const saveGood = (event) => {
        console.log('Метод сохранения новых данных о товаре')
        event.preventDefault()

        //Используем форм дату, для получения и отправки формы на сервер , во всех наших формах
        //Получаем из рефа нативную(элемент из чистого JS) форму
        const nativeForm = formSaveRef.current
        //Передае форм дате нативную форму
        const formData = new FormData(nativeForm)

        //Так как в нашем апи ОТДЕЛЬНЫЕ роуты для работы с файлами, первы делом, мы ОТДЕЛЬНО получаем и отправляем фафл на сервер
        // Получим файл
        const title = formData.get('TITLE')
        const img = formData.get('IMG')
        const discr = formData.get('DISCR')
        const price = formData.get('PRICE')
        const count = formData.get('COUNT')
        
        goods.find((good, index) => {
            if(good.ID == id){
                goods[index].TITLE = title
                goods[index].DISCR = discr
                goods[index].PRICE = price
                goods[index].COUNT = count
                navigate("/goods", {
                    state: {
                        goods: goods,
                    }
                })
            }
        })
    }

    if(!good){
        return <Loader />
    }

    return(
        <>
            <h1>{good.TITLE}</h1>
            <img className='detail-img' src={good.IMG}/>
            <form ref={formSaveRef} encType="multipart/form-data">
                <p>Название товара: <input type='text' name='TITLE' defaultValue={good.TITLE}/></p>
                <p>Описание товара: <input type='text' name='DISCR' defaultValue={good.DISCR}/></p>
                <p>Цена товара: <input type='text' name='PRICE' defaultValue={good.PRICE}/></p>
                <p>Количество товара: <input type='text' defaultValue={good.PRICE}/></p>
                <p>Изображение товара: <input type='file' name="IMG"/></p>
                <p><input type='submit' onClick={(event) => saveGood(event)} value='Сохранить'/></p>
            </form>
        </>
    )
}