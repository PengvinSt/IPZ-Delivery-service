import React from 'react'
import classes from './PartnerPage.module.css'
import NavBar from '../../components/UI/Navbar/NavBar'
import Footer from '../../components/UI/Footer/Footer'

export default function PartnerPage() {
  return (
    <div>
    <NavBar/>
    <div className={classes['main-page-partner']}>
      <div  className={classes['partner-form']}>
          <p className={classes['partner-form-logo']}>You chose your partners!</p>
          <div className={classes['partner-form-input']}>
              <form  className={classes['login-form']}>
                  <div className={classes['input-form']}>
                      <i className="fa-solid fa-user"></i>
                      <input type="text" id="login"/>
                      <label for="login">Name and Last name</label>
                  </div>
                  <div className={classes['input-form']}>
                      <i className="fa-solid fa-envelope"></i>
                      <input type="email" id="email"/>
                      <label for="email">Email</label>
                  </div>
                  <div  className={classes['input-form']}> 
                      <i className="fa-solid fa-phone"></i>
                      <input type="text" id="phone"/>
                      <label for="phone">Phone number</label>
                  </div>
                      <input type="submit" value="Continue"  className={classes['submit-form']} />
              </form>
          </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
