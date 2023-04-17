import React, { useContext, useState } from 'react'
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { Context } from '../../../App';
// import {observer} from 'mobx-react-lite'
import Modal from '../Modal/Modal';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
import Cart from '../Cart/Cart';
import { observer } from 'mobx-react-lite';
// import Error from '../Error/Error';


export default observer(function NavBar() {
  const [modal, setModal] = useState(false);
  const {isRegister, storeUser, storeProduct} = useContext(Context)
  // useEffect([storeProduct.cart])
  return (
    (storeUser.isAuth) 
    ?
    <div className={classes.header}>
        <Link to='/main' className={classes['header-logo']}>Delivery service</Link>
        <div className={classes['header-nav']}>
          {(storeUser.role === 'ADMIN') && <Link to='/admin' className={classes['header-admin']}>Admin</Link>}
          {(storeUser.role === 'USER') && <Link to='/user' className={classes['header-admin']}>My info</Link>}
          <button className={classes['header-btn-2']} onClick={()=>setModal(true)}>Cart 
          {(storeProduct.cart.length!==0) && <p>({storeProduct.cart.length})</p>}
          </button>
          <Modal visible={modal} setVisible={setModal}>
            <Cart/>
          </Modal>
          <button className={classes['header-btn']} onClick={()=>{storeUser.logout()}}>Log out</button>
        </div>
        
    </div>
    :
    <div className={classes.header}>
        <Link to='/main' className={classes['header-logo']}>Delivery service</Link>
        <button className={classes['header-btn']} onClick={()=>setModal(true)}>Start</button>
        <Modal visible={modal} setVisible={setModal}>
          {(isRegister)
          ? <LoginForm/>
          : <RegisterForm/>
          }
          {/* <Error/> */}
        </Modal>
    </div>
  )
})
