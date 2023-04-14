import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div className={classes['footer-display']}>
        <div className={classes['footer-display-column']}>
        <h2>Let’s do it together</h2>
        <Link to='/partner' className={classes['link-footer']}>Careers</Link>
        <Link to='/partner' className={classes['link-footer']}>Contact for Partners</Link>
        <Link to='/partner' className={classes['link-footer']}>Couriers</Link>
        <Link to='/partner' className={classes['link-footer']}>Contact for Business</Link>
        </div>
        <div className={classes['footer-display-column']}>
        <h2>Links of interest</h2>
                <p>About us</p>
                <p>FAQ</p>
                <p>Contact us</p>
        </div>
        <div className={classes['footer-display-column']}>
        <h2>Follow us</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
        </div>
        </div>
    </div>
  )
}
