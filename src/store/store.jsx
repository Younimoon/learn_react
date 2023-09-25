import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./reducers/reducers";
import stuSlice from "./PTk";
const Store = configureStore({
    reducer:{
       Reducers,
       stu:stuSlice.reducer
    }
     })
export default Store
// 两种方式获取satte的方式一样，但是操作state的方式发生改变