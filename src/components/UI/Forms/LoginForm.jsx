import React, { useContext, useState } from 'react'
import {observer} from 'mobx-react-lite'
import { Context } from '../../../App'
import classes from './Form.module.css'

export default  observer(function LoginForm() {
    const {setRegister, storeUser} = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className={classes['login-form']}>
        <h1>Log in</h1>
        <div className={classes['input-form']}>
            <i className="fa-solid fa-envelope"></i>
            <input type="text" id="login" onChange={el=>setUsername(el.target.value)} value={username}/>
            <label>Login</label>
        </div>
        <div className={classes['input-form']}>
            <i className="fa-solid fa-eye" ></i>
            <input type="password" id="password" onChange={el=>setPassword(el.target.value)} value={password}/>
            <label>Password</label>
        </div>
        {/* <div className={classes['forgot-form']}>
            <label for="check-forgot-form"><input type="checkbox" id="check-forgot-form" />Remember me </label>
            <p>Forget Password?</p>
        </div> */}
        {/* <div className={classes['forgot-form']}>
            <p>{storeUser.error}</p>
        </div> */}
            <input type="submit" value="Log in" className={classes['submit-form']} onClick={()=>{storeUser.login(username,password)}}/>
        <div className={classes['register-form']}>
            <label>Don't have an account?</label>
            <p onClick={()=>setRegister(false)}>Register</p>
        </div>
    </div>
  )
})
