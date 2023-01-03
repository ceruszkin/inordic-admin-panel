import React, {useState, useEffect} from 'react'
import {useParams, useNavigate, useLocation} from 'react-router-dom'

import {Loader} from '../loader'

import './index.css'

import goodsJSON from '../../stub/goods.json'

const formSaveRef = React.createRef();



/**
 *  Поправить баг с удалением товара, при его выделении
 */

export function GoodDetail(){

    const location = useLocation();
    //Записываем состояния компонента
    const [good, setGood] = useState(null)
    const [goods, setGoods] = useState(goodsJSON)

    //Задействуем новые хуки useParams и useNavigate
    // Получаем параметр id, который описан в роуте 
    const {id} = useParams()
    //.....
    const navigate = useNavigate();

    // Хук useEffect, необходим нам для установки базовых значений, если нам необходимо, 
    // чтобы он сработал только один раз при отрисовке компонента,
    // 2 параметром, указываем пустой массив зависемойтей 
    useEffect(() => {
            // Забираем данные из хранилища роутера
            const goodsFromDetail = location?.state?.goods
            const findId = goodsFromDetail || goods
            const good = findId.find(good => good.ID == id)
            // Устанавливаем найденный объект, как состояние good
            // Когда появится запрос к серверу, костыль setTimeout, можно будет убрать
            setTimeout(() => {
                setGood(good)
            }, 1000)
    }, [])

    //Методы компонента

    const saveGood = (event) => {
        console.log('Метод сохранения новых данных о товаре')
        event.preventDefault()
        //Используем форм дату, для получения и отправки формы на сервер , во всех наших формах
        //Получаем из рефа нативную(элемент из чистого JS) форму
        const nativeForm = formSaveRef.current
        //Передае форм дате нативную форму
        const formData = new FormData(nativeForm)        
        //Получить все данные с формы

        // Получим файл
        const title = formData.get('TITLE')
        const img = formData.get('IMG')
        const discr = formData.get('DISCR')
        const price = formData.get('PRICE')
        const count = formData.get('COUNT')

        //Найдем редактируемый элемент, внутри состояния goods
        goods.find((good, index) => {
            // У каждого переребираемого товара есть свой  id
            // Необходимо сравнить его с id из useParams
            if(good.ID == id){
                // если условие прошло, значит мы нашли нужный товар
                goods[index].TITLE = title
                goods[index].DISCR = discr
                goods[index].PRICE = price
                goods[index].COUNT = count
                console.log('Нашел и поменял')
                //Отпрвляемся на страницу, со списком товаров
                navigate("/goods", {
                    state: {
                        goods: goods,
                    }
                });
            }
        })
                                    



        //Отправляем форм дату на сервер

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