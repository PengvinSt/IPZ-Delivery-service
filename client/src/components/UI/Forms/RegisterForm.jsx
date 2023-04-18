import React, { useContext, useState } from 'react'
import {observer} from "mobx-react-lite"
import { Context } from '../../../App'
import classes from './Form.module.css'
import Error from '../Error/Error'

export default observer(function RegisterForm() {
    const {setRegister, storeUser} = useContext(Context)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

  return (
    <div className={classes['login-form']}>
        <h1>Register</h1>
        <div className={classes['input-form']}>
            <i className="fa-solid fa-user"></i>
            <input type="text" id="login" onChange={el=>setUsername(el.target.value)} value={username}/>
            <label>Login</label>
        </div>
        <div className={classes['input-form']}>
            <i className="fa-solid fa-envelope"></i>
            <input type="email" id="email" onChange={el=>setEmail(el.target.value)} value={email}/>
            <label>Email</label>
        </div>
        <div className={classes['input-form']}>
            <i className="fa-solid fa-eye" ></i>
            <input type="password" id="password" onChange={el=>setPassword(el.target.value)} value={password}/>
            <label>Password</label>
        </div>
        <div className={classes['forgot-form']}>
            <Error/>
        </div>
            <input type="submit" value="Register" className={classes['submit-form']} onClick={()=>{storeUser.registration(username, email, password)}}/>
        <div className={classes['register-form']}>
            <label>Have an account?</label>
            <p onClick={()=>{setRegister(true); storeUser.setError('')}}>Log in</p>
        </div>
    </div>
  )
})
