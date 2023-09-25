import React from 'react'

// useResucer 和usestate差不多，只要就是usestate操作元素只能一个一个触发事件
// usereducer 就是解决这个问题，将所有的操作一个状态的方法整合到一起

// 注意：reducer函数返回的是一个对象形式
// 且state下面的属性在赋值时，自己已经结构了不需要state.name
// state 是只读对象不能直接操作若需要返回对象所有元素
//{
//  ...state,name:"huang"
// }

import { useReducer } from 'react'
function reducer(state,action){
    console.log(action,state);
    if(action.type === "change"){
       return {
           name : "威鹏"
       } 
    }
    return "wu"
}
export default function Usereducer() {
  const [state,dispatch] = useReducer(reducer,{name:"黄"})
  const changeName = ()=>{
      console.log(state);
      dispatch({type:"change"})
  }
  return (
    <div>
      {/* usereducer */}
      {/* {state.name} */}
      {state.name}
      <button onClick={changeName}>点击切换名字</button>
    </div>
  )
}
