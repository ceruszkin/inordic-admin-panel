import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import './index.css'
import GoodItem from '../good-item'
import { Loader } from '../loader'

import goodsJSON from '../../stub/goods.json'
//Создали реф для получения данных введенные в поле поиска
const inputSearchRef = React.createRef();


/**
 * GoodList - компонентсписка карточек товаров
*/

export function GoodList(){
    // useState - хук для подключения состояний к функциональному компоненту
    // goods - значение в состоянии
    // setGoods - функция, которая позволяет это состояние поменять
    // useState([]) - задействуем хук и устанавливаем по умолчанию состояни пустого массива
    const [goods, setGoods] =  useState([])
    const [filteredGoods, setFilteredGoods] =  useState(null)
    //хук для лоадера загрузки
    const [isLoading, setIsLoading] =  useState(true)
    //Сосстояния выбранных товаров 
    const [selected, setSelected] =  useState([])
    //Получаем данные, которые передаются в роут с помощью useLocation
    const location = useLocation();
    const navigate = useNavigate()
    
    //Работа с useEffect - хук для работы с состояниями и побочными эффектами 
    // 2 параметра
    // 1 параметр алгоритм, внутри хука
    // 2 список зависимостей, на которые реагирует useEffect
    useEffect(() => {
        console.log('GoodList загрузился')
        //Получаем goods, который записали в GoodDetail
        const goodsFromDetail = location?.state?.goods
        if(goodsFromDetail){
            setGoods(goodsFromDetail)
        }else {
            setGoods(goodsJSON)
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    const findGood = (event) => {
        //ДЗ сделать поиск в реальном времени
        //Получаем введенное в инпет значение, через реф
        const valueFromSearchInput = inputSearchRef?.current?.value
        //найдем в стейте, то, что мы ввели в поле поиска
        const searcherElement = goods.find(good => 
            good.TITLE == valueFromSearchInput || good.DISCR == valueFromSearchInput
        )
        if(searcherElement == '' || searcherElement == undefined) {
            setGoods(goodsJSON)
        }else{
            //Обновляем состояние компонент
            setFilteredGoods([searcherElement])
        }

    }

    const delGood = (id) => {
        //ДЗ Рефакторинг метода delGood
        const newGoods = goods.filter((good) =>
            good.ID !== id
        )
        setGoods(newGoods)

        const newFilteredGoods = filteredGoods.filter((good) =>
            good.ID !== id
        )
        setFilteredGoods(newFilteredGoods)
    }

    const delCurrentGood = () => {
        //Алгоритм удаления товаров
        //Алгоритм нужен, чтобы из основного массива, удалить значения, которые есть во втором массиве

        // Шаг 1 - Выбор значений, либо из отфильтрованного массива с товарами, либо из обычного 
        const currentGoods = filteredGoods || goods

        // Шаг 2 - Перебираем все текущие товары в обратном порядке
        for( let i = currentGoods.length - 1; i>=0; i--){
            // Шаг 3 - Массив, в котором, содержаться товары на удаление, его мы так же перебираем
            for( let j = 0; j < selected.length; j++){
                // Шаг 4 - Условия, 
                // - если нашелся элемент в масссиве выбранных на удаление товаров но по индексу, который участвует в цикле перебирания основных товаром
                // - если идентификатор тоара по индексу 2 цикла, подставленный в массив основных товаров равен индексу подставленному в массив удаляемых товаров
                if(currentGoods[i] && (currentGoods[i].ID === selected[j].ID)){
                    //Шаг 4 - Удаляем из основного массива, значение по индексу, который получаем из верхнего циксла
                    currentGoods.splice(i, 1);
               }
           }
        }
        
        setSelected([])
        setGoods([...currentGoods])

    }

     //Вывод лоадера, во время загрузки компонента
    if(isLoading){
        return <Loader />
    }

    const currentGoods = filteredGoods || goods

    return(
        <React.Fragment>
            <div className='panel-button'>
                <input ref={inputSearchRef} placeholder='Введите название товара' type='text'/> 
                <input type='submit' onClick={(event) => findGood(event)} value='Поиск'/>
                <button onClick={(event) => delCurrentGood(event)}>
                    Удалить {selected.length} товаров
                </button>
                <button onClick={ () => navigate('/goods/add')}>
                    Добавить товар
                </button>
            </div>
            <div className='card-list'>
            {      
                currentGoods.map(good => 
                    <GoodItem 
                        key={good.ID}
                        data={good}
                        delGood={delGood}
                        selected={selected}
                        setSelected={setSelected}
                    />
                )
            }
            </div>
        </React.Fragment>
    )
}