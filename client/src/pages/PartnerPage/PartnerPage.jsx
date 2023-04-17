import React, { useContext, useState } from 'react'
import { Context } from '../../App'
import classes from './PartnerPage.module.css'
import NavBar from '../../components/UI/Navbar/NavBar'
import Footer from '../../components/UI/Footer/Footer'

export default function PartnerPage() {
  const {storeUser} = useContext(Context)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <div>
    <NavBar/>
    <div className={classes['main-page-partner']}>
      <div  className={classes['partner-form']}>
          <p className={classes['partner-form-logo']}>You chose your partners!</p>
          <div className={classes['partner-form-input']}>
              <div  className={classes['login-form']}>
                  <div className={classes['input-form']}>
                      <i className="fa-solid fa-user"></i>
                      <input type="text" id="name" onChange={el=>setName(el.target.value)} value={name}/>
                      <label for="name">Name and Last name</label>
                  </div>
                  <div className={classes['input-form']}>
                      <i className="fa-solid fa-envelope"></i>
                      <input type="email" id="email" onChange={el=>setEmail(el.target.value)} value={email}/>
                      <label for="email">Email</label>
                  </div>
                  <div  className={classes['input-form']}> 
                      <i className="fa-solid fa-phone"></i>
                      <input type="text" id="phone" onChange={el=>setPhone(el.target.value)} value={phone}/>
                      <label for="phone">Phone number</label>
                  </div>
                      <input type="submit" value="Continue"  className={classes['submit-form']} onClick={()=>storeUser.createPartner(name,email,phone)}/>
              </div>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
