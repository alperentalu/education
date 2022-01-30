import Home from "../views/Home";
import Login from "../views/Login";
import SecondPage from "../views/SecondPage";


export const menuRouter = [
    {
        name: "Home",
        id: 1,
        url: "/",
        page : <Home key={1}/>,
        menu: true,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
    {
        
        name: "SecondPage",
        id: 2,
        url: "/secondpage",
        page :<SecondPage key={2}/>,
        menu: true,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
    {
        
        name: "Login",
        id: 3,
        url: "/login",
        page :<Login key={3}/>,
        menu: false,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
]

export const selectedMenu = (item) => {
    console.log(item)
}