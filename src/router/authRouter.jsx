import React, { Children } from 'react'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router'
export default function AuthRouter() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useLayoutEffect(()=>{
        // token? Children :navigate("/shouye/123/123")
        if(token) return
        navigate("/shouye/123/123")
    },[navigate,token])
    console.log(token);
  return (
    <div>
        {/* {token? null :navigate("/shouye/123/123")} */}
    </div>
  )
}
