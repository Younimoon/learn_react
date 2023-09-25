// import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
// createSlice 替代了每个独立的reducer
  const stuSlice = createSlice({
    // 相当于一个命名空间
    name:"stu",
    // 设置初始值
    initialState:{
        name:"hwp",
        sex:"男",
        age:20
    },
    // 原来每个recuder的操作
    reducers:{
        setName(state,action){
            state.name = action.payload
        }
    }
})
const {setName} = stuSlice.actions
export {setName}
export default stuSlice