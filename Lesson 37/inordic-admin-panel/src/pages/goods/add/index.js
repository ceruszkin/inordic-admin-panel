import goodsJSON from '../../../stub/goods.json'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { ErrorBlock } from '../../../components/error-block'
import { imageToBS64 } from '../../../utils/image-to-bs64'


const formAddRef = React.createRef();

export function Add(){

    //Делаем состояние для выводи ошибки
    const [error, setError] = useState(false)
    //Задействуем useNavigate
    const navigate = useNavigate()

    useEffect( () => {

    }, [])

    const addGood = (event) => {
        event.preventDefault()
        const formData = new FormData(formAddRef.current)
        //Получаем введенные в инпуты значения
        const title = formData.get('title')
        const discr = formData.get('discr')
        const price = formData.get('price')
        const count = formData.get('count')
        const img = formData.get('img')

        //Проверяем тип файла
        if (img.type == "image/png") {
        
            //Формируем объект для отображения на странице товаров
            const goodObject = {
                "ID": Math.random(),
                "TITLE": title,
                "DISCR": discr,
                "PRICE": price,
                "IMG": img.name,
                "COUNT": count
            }

            //TODO Тут будем отпралять данные на сервре 
            

            //Обновляем интерфейс

            imageToBS64(img, function(imageBS64){
                //Шаг 0 - Полученную строку bs, записываем в объект 
                goodObject.IMG = imageBS64
                //Шаг 1 - нужно добавить в массив с товарами, новый объект
                goodsJSON.push(goodObject);
                //Шаг 2 - отправить обновленный масссив с товарами на страницу списка товаров
                navigate("/goods", {
                    state: {
                        goods: goodsJSON,
                    }
                });

            })
           

        } else {
            //Тут мы поняли, что нужно вывести ошибку
            setError(true)
        }
    }

    return(
        <form ref={formAddRef} encType="multipart/form-data">
            <input type='text' name='title' placeholder="Заголовок" />
            <input type='text' name='discr' placeholder="Описание" />
            <input type='text' name='price' placeholder="Цена" />
            <input type='text' name='count' placeholder="Количество" />
            <input type='file' name='img' />
            <input type='submit' onClick={(e)=> addGood(e)} value='Добавить' />
            {
                error 
                ? <ErrorBlock errorText={'Ошибка, не правильный формат изображения'}/>
                : ''
            }
        </form>
    )
} 