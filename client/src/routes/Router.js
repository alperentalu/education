import Home from "../views/Home";
import Login from "../views/Login";
import SecondPage from "../views/SecondPage";
import SecondPagev2 from "../views/SecondPagev2";
import Register from "../views/Register"

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
        name: "SecondPage Version 2",
        id: 3,
        url: "/secondpage/version2",
        page :<SecondPagev2 key={3}/>,
        menu: true,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
    {
        name: "Login",
        id: 4,
        url: "/login",
        page :<Login key={4}/>,
        menu: false,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
    {
        name: "Register",
        id: 5,
        url: "/register",
        page :<Register key={5}/>,
        menu: false,
        roles: [],
        isExact: true,
        icon: "",
        break: true
    },
    
    
]
