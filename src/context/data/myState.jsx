// import React from 'react';
import { useState } from 'react';
import MyContext from './myContext';

function myState(props) {
    // const state = {
    //     name: "Kashiprasad Patil",
    //     role : " React Developer "
    // }
    // const comapany = {
    //   job : "RSL Solution",
    //   exp: "One Year",
      
    // }

    const [mode,setMode] = useState('light');
    const toggleMode = ()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='rgb(17,24,39)';
      }else{
        setMode('light');
        document.body.style.backgroundColor='white';
      }
    }
  return (
    // <MyContext.Provider value= {{state,comapany}}>
    <MyContext.Provider value= {{mode,toggleMode}}>
{props.children}
    </MyContext.Provider>
  )
}

export default myState