import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import Error from "./components/Error"
import { Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import appStore from "./components/appStore"
import { Provider } from "react-redux"
import Cart from "./components/Cart"

//Chunking
// Lazy Loading
// Code splitting
//On Demand loading
// Dynamic Bundling
// Dynamic import
const ContactUs = lazy(()=> import("./components/ContactUs"));
const AppLayout  = () => {

    const [userName, setUserName] = useState(null)
    useEffect(()=>{
        const data = {name: "Vineetha"}
        setUserName(data.name)
    }, [])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <>
            <Header/>
            <Outlet/>
        </>
        </UserContext.Provider>
        </Provider>
)
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Loading...</h1>}><ContactUs/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
appRouter.r
