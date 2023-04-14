import React, { createContext, useEffect, useState } from "react";
import {BrowserRouter,} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import AppRouter from "./components/AppRouter";
import StoreUser from "./store/storeUser";
import './App.css'

const storeUser = new StoreUser()

export const Context = createContext({
  storeUser,
})

const App = observer(() =>{
  useEffect(()=>{
    if(localStorage.getItem('token')){
      storeUser.checkAuth()
    }
  },[])
  
  const [isRegister, setRegister] = useState(true)
  return (
   <Context.Provider value={{
    storeUser,
    isRegister,
    setRegister,
  }}>
     <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
   </Context.Provider>
  );
})
// function App() {
//   useEffect(()=>{
//     if(localStorage.getItem('token')){
//       storeUser.checkAuth()
//     }
//   },[])
  
//   const [isRegister, setRegister] = useState(true)
//   return (
//    <Context.Provider value={{
//     storeUser,
//     isRegister,
//     setRegister,
//   }}>
//      <BrowserRouter>
//     <AppRouter/>
//     </BrowserRouter>
//    </Context.Provider>
//   );
// }

export default App;
