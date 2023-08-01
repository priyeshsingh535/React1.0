 import React from "react";
 import ReactDOM from "react-dom/client";
 import Heading from "./component/Heading";
 import Body from "./component/Body";
 import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
 import Contact from "./component/Contact";
 import About from "./component/About";
 import Error from "./component/Error";


 const AppLayout=()=>{
    return <div className="app">
        <Heading/>
        <Outlet/>
    </div>;  
 }

 const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/About",
                element: <About/>,
        
            },
            {
                path:"/Contact",
                element: <Contact/>
            }
        ],

        errorElement: <Error/>,
    },
    
 ])

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={approuter}/>);
 
 