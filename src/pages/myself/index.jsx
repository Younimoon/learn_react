import React from 'react'
import { useNavigate } from 'react-router'
// import { Outlet } from 'react-router'
import { startTransition } from 'react';
import Demo from '../../components/Demo';
import ShowState from '../../components/showState';
export default function Myself() {
  const nivigate = useNavigate()
  function toson(){
   
    startTransition(() => { 
      // setContent(e.target.value); 
       nivigate("/shouye/xiaoxi")
      //  navigate("/shouye")
    }); 
  }
  return (
    <div>
      Myself
      <button onClick={toson}>点击跳转son</button>
      <ShowState></ShowState>
      <Demo></Demo>
      {/* <Outlet></Outlet> */}
    </div>
  )
}
