import { combineReducers } from "redux";
import {PerReducer,schoolReducer} from "./per_reducer";
const Reducers = combineReducers({
   PerReducer,
   schoolReducer
})
// const reducer = combineReducers({
//     stu:stuReducer,
//     school:schoolReducer
// });
export default Reducers