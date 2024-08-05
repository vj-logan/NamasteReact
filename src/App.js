import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import AboutUs from "./components/AboutUs"
import Error from "./components/Error"
import { Outlet } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"

//Chunking
// Lazy Loading
// Code splitting
//On Demand loading
// Dynamic Bundling
// Dynamic import
const ContactUs = lazy(()=> import("./components/ContactUs"));
const AppLayout  = () => (
    <>
        <Header/>
        <Outlet/>
    </>
)

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
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
appRouter.r
