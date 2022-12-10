import { 
    createBrowserRouter,
} from 'react-router-dom'

//Импортируем страницы приложения для дальнейшего отображения на определенных маршрутах
import Main from '../../pages/main'
import Goods from '../../pages/goods'

//Импортируем созданный нами лайаут
import MainLayout from '../../components/main-layout'

//Описываем роутинг в приложении
// path - это путь в браузерной строке
// element - это тот компонент, который будет по указанному выше пути отобрадаться 
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
                }
            ]
        }
    ]
)
//Экспортируем роутер
export default Router