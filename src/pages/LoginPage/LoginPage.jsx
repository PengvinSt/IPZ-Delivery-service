import React from 'react'
import NavBar from '../../components/UI/Navbar/NavBar'
import Footer from '../../components/UI/Footer/Footer'
import CardPage from '../../components/UI/CardPages/CardPage'
import classes from './LoginPage.module.css'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
      <NavBar/>
      <CardPage>
        <div className={classes['main-card']}>
            <h1><span>Delivery service</span> - best service for delivering food in city!</h1>
            <h2>We are:</h2>
          <div className={classes['main-display']}>
              <div className={classes['main-display-logo']}>
              <i className="fa-solid fa-truck-fast"></i>
              <i className="fa-solid fa-money-check-dollar"></i>
              <i className="fa-solid fa-users"></i>
              </div>
              <div className={classes['main-display-text']}>
              <p>Fast</p>
              <p>Cheap</p>
              <p>Customer oriented</p>
              </div>
          </div>
        </div>
      </CardPage>
      <CardPage>
      <div className={classes['contact-card']}>
                <h2>Whant to work with us?</h2>
                <div className={classes['contact-display']}>
                    <div className={classes['contact-display-column']}>
                    <i className="fa-solid fa-car"></i>
                        <Link to='/partner' className={classes['link']}>Become a rider</Link>
                        <p>Be your own boss! Enjoy flexibility, freedom and competitive earnings by delivering with us!</p>
                    </div>
                    <div className={classes['contact-display-column']}>
                        <i className="fa-solid fa-handshake"></i>
                        <Link to='/partner' className={classes['link']} >Become a partner</Link>
                        <p>Grow with us! Our technology and user base can help you boost sales and unlock new opportunities!</p>
                    </div>
                    <div className={classes['contact-display-column']}>
                        <i className="fa-solid fa-house-laptop"></i>
                        <Link to='/partner' className={classes['link']}>Careers</Link>
                        <p>Ready for an exciting new challenge? If you’re ambitious, humble, and love working with others, then we want to hear from you!</p>
                    </div>
                </div>
            </div>
      </CardPage>
      <Footer/>
    </div>
  )
}
