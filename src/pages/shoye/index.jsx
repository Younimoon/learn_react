import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router'
import {useParams} from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../store/PTk';
export default function Shouye() {
  const location = useLocation()
  console.log("location",location);
  const stu  = useSelector(state=>state.stu)
  const dispatch = useDispatch()
  const changeName = ()=>{
    dispatch(setName("黄哒哒"))
  }
  // 获取params 的传参
  const params = useParams()
  // 获取query的传参
  console.log(" useSearchParams()", useSearchParams());
  const [search]=  useSearchParams()
  console.log("parasm",params);
  console.log(search.name,"search");

  // 拿到query参数
  const back = ()=>{
    console.log(search.get("id"));
  }
  useEffect(()=>{
    console.log(search.get("id"),"useEffect");
  },[search])
  // const arr = useEffect
  return (
    <div>
      shoye
      <button onClick={back}>点击查询</button>
      {stu.name}11111111111
      <button onClick={changeName}>点击修改</button>
      <Outlet></Outlet>
    </div>
  )
}
