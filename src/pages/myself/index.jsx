import React from 'react'
import { useNavigate } from 'react-router'
// import { Outlet } from 'react-router'
import { startTransition } from 'react';
import Demo from '../../components/Demo';
import ShowState from '../../components/showState';
import MyComponent from '../../components/Deme1/demo2';
import Express from '../../components/Deme1/demo3';
import Fancy from '../../components/Deme1';
import Usereducer from '../../components/useReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import stuSlice from '../../store/PTk';
export default function Myself() {
  const nivigate = useNavigate()
  const pre = useSelector(state=>state)
  console.log("w是pre",pre);
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log("w是pre",pre);
  })
  const changestu = ()=>{
    dispatch({
      type:"set_age",
      payload:"19"
    })
  }
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
      <MyComponent></MyComponent>
      <Express></Express>
      <Fancy></Fancy>
      <Usereducer></Usereducer>
      {/* <Outlet></Outlet> */}
      {pre.Reducers.PerReducer.age}
      {/* {stu.name} */}
      <button onClick={changestu}>dianji</button>
    </div>
  )
}
