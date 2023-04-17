import React, { useContext } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { Context } from '../App.js'
import {observer} from 'mobx-react-lite'
import PartnerPage from '../pages/PartnerPage/PartnerPage'
import RestoranPage from '../pages/RestoranPage/RestoranPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminPage from '../pages/AdminPage/AdminPage.jsx'
import UserPage from '../pages/UserPage/UserPage.js'

export default observer(function AppRouter() {
  const {storeUser} = useContext(Context)
  return (
    (storeUser.isAuth)
    ?
    <Routes>
        <Route path='/product' element={<RestoranPage/>} />
        {(storeUser.role === 'ADMIN') && <Route path='/admin' element={<AdminPage/>}/>}
        {(storeUser.role === 'USER') && <Route path='/user' element={<UserPage/>}/>}
        <Route path="/*" element={<Navigate to="/product" replace />} />
    </Routes>
    :
    <Routes>
        <Route path='/main' element={<LoginPage/>} />
        <Route path='/partner' element={<PartnerPage/>} />
        <Route path="/*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
})
