import React from 'react'
import NavBar from '../../components/UI/Navbar/NavBar'
import Footer from '../../components/UI/Footer/Footer'
import ItemCard from '../../components/UI/ItemCard/ItemCard'
import classes from './RestoranPage.module.css'

export default function RestoranPage() {
  return (
    <div>
    <NavBar/>
    <div className={classes['main-page-shop']}>
            <div className={classes['shop-nav']}>
                <h1>Best food from alll parts of city!</h1>
            </div>
            <div className={classes['item-container']}>
                <div className={classes['shop-filter']}>
                    <button>Best choice</button>
                    <button>Best price</button>
                    <button>Additional fee</button>
                </div>
                <div className={classes['shop-props']}>
                
                <ItemCard link={''} name={'Name'}/>
                </div>
            </div>
    </div>
    <Footer/>
    </div>
  )
}
