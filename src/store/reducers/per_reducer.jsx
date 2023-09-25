// import React from 'react'

const PerReducer = (state={
    name:"haung",
    sex:"男",
    age:10
},action) =>{
  switch(action.type){
      case "set_name":
          return {
              ...state,
              name:action.payload
          }
      case "set_age":
          return{
              ...state,
              age:action.payload
          }
      default :return state
  }
 
}
const schoolReducer = (state = {

    name: '花果山一小',
    address: '花果山大街1号'

}, action) => {
    switch (action.type) {
        case 'SET_SCHOOL_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'SET_SCHOOL_ADDRESS':
            return {
                ...state,
                address: action.payload
            };
        default :
            return state;
    }

};
export {PerReducer,schoolReducer}