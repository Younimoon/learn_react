// import logo from './logo.svg';
import './App.css';
import Router from './router';
// import { useRoutes } from 'react-router';
import { startTransition } from 'react';
import { NavLink } from "react-router-dom";
import {  Suspense } from 'react'
import Demo from './pages/demo';
import State from './pages/state';
import {  useRoutes,   useNavigate} from 'react-router-dom';
// import { } from 'react-router-dom';
function App() {
  const router = useRoutes(Router)
  const navigate =  useNavigate()
  function toshouye(){
    startTransition(() => { 
      // setContent(e.target.value); 
       navigate("/shouye")
  }); 
   
  }
  function Toshouye(){
    navigate("/shouye/1/2?id=123")
  }
  function toparams(){
    navigate("/shouye/'黄'/123")
  }
  return (
    <div className="App">
        <NavLink to="/shouye" style={(isActive)=>{
          return{
            color: isActive ? "red" :"white"
          }
        }}>首页</NavLink>
        <NavLink to= "/myslef" >去我的</NavLink>
        <button onClick={Toshouye}>点击跳转首页query</button>
        <button onClick={toshouye}>点击跳转</button>
        <button onClick={toparams}>点击Params</button>
        {/* navigate */}
         <Demo></Demo>
         <State></State>
        <Suspense fallback={<div>loading...</div>}>
          {router}
          {/* <Outlet/> */}
        </Suspense>
       
    </div>
  );
}

export default App;
