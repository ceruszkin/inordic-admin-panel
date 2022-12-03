import { 
    createBrowserRouter,
} from 'react-router-dom'

//Импортируем страницы приложений для дальнейшего отображения на определенных маршрутах.
import Main from '../../pages/main'
import Goods from '../../pages/goods'

//Описываем роутинг в приложении.
//path -- путь в браузерной строке
//element -- это тот компонент, который будет отображаться по указанному выше пути.
const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main />,
        },
        {
            path: "/goods",
            element: <Goods />,
        }
    ]
)

//Экспортируем роутер.
export default Router