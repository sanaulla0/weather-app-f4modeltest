import React from 'react'
import { SET_TEMPERATURE_UNIT } from './action'
const intialState = {
     unit:'c',
}

 export const reducer = (state=intialState,action) => {
  console.log("actioo", action);
 switch (action.type) {
  
    case SET_TEMPERATURE_UNIT:
 return {
     ...state,
     unit: action.payload,
 };
      default:
       return state;

 }
 };

