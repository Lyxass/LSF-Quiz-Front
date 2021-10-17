import Home from "../views/Home";
import Game from "../views/Game";


const routerStruct = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/game/:gameName',
        name: 'Game',
        component: Game,
        props: true
    }
]

export default routerStruct