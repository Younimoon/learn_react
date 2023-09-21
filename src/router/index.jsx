import { lazy } from "react";
import { Navigate } from "react-router";
const Xiaoxi = lazy(()=>import("../pages/xiaoxi"))
const Myself = lazy(()=>import("../pages/myself"))
const Shouye = lazy(()=>import("../pages/shoye"))
// params 参数需要自己配置
const Router = [
    {
        path:"/myslef",
        element:<Myself></Myself>
    },
    {
        path:"/shouye/:name/:id",
        element:<Shouye></Shouye>,
        children:[
            {
                path:"/shouye/:name/:id/xiaoxi",
                element:<Xiaoxi/>
            },
        ]
    },{
        path:"/",
        element:<Navigate to='/myslef'/>
    }
]
export default Router