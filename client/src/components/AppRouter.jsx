import React, { useContext } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { Context } from '../App.js'
import {observer} from 'mobx-react-lite'
import PartnerPage from '../pages/PartnerPage/PartnerPage'
import RestoranPage from '../pages/RestoranPage/RestoranPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminPage from '../pages/AdminPage/AdminPage.jsx'
import UserPage from '../pages/UserPage/UserPage.js'

export default observer(function AppRouter() {
  const {storeUser} = useContext(Context)
  return (
    (storeUser.isAuth)
    ?
    <Routes>
        {/* <Route path='/partner' element={<PartnerPage/>} /> */}
        <Route path='/product' element={<RestoranPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
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
