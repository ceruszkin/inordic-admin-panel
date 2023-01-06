import { 
    createBrowserRouter,
} from 'react-router-dom'

//Импортируем страницы приложения для дальнейшего отображения на определенных маршрутах
import Main from '../../pages/main'
import Goods from '../../pages/goods'
import Reviews from '../../pages/reviews'
import Users from '../../pages/users'
import {Add as AddGood} from '../../pages/goods/add'

//Импортируем созданный нами лайаут
import MainLayout from '../../components/main-layout'

import {GoodList} from '../../components/good-list'
import {GoodDetail} from '../../components/good-detail'

/**
 * Router - утилс который опредяет маршруты приложения
 * Маршруты:
 * Основной - '/': Отображается компонент Main (Основная страница)
 * Товары - '/goods': Отображается компонент Goods (товары)
 */
const Router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                },
                {
                    path: '/goods',
                    element: <Goods />,
                    children: [
                        {
                            index: true,
                            element: <GoodList />
                        },
                        {
                            path: '/goods/:id',
                            element: <GoodDetail />
                        },
                        {
                            path: '/goods/add',
                            element: <AddGood />
                        }
                    ]
                },
                {
                    path: '/users',
                    element: <Users />,
                },
                {
                    path: '/reviews',
                    elementL: <Reviews />
                }
            ]
        }
    ]
)
//Экспортируем роутер
export default Router 