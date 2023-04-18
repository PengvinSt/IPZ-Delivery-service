import React, { useContext, useEffect} from 'react'
import NavBar from '../../components/UI/Navbar/NavBar'
import Footer from '../../components/UI/Footer/Footer'
import ItemCard from '../../components/UI/ItemCard/ItemCard'
import classes from './RestoranPage.module.css'
import { Context } from '../../App'
import { observer } from 'mobx-react-lite'
export default observer(function RestoranPage() {
  const {storeProduct} = useContext(Context)
  useEffect(()=>{
    storeProduct.getProducts()
  },[storeProduct])

  return (
    <div>
    <NavBar/>
    <div className={classes['main-page-shop']}>
            <div className={classes['shop-nav']}>
                <h1>Best food from alll parts of city!</h1>
                <input type='text' placeholder='Search...' className={classes['search-header']} onChange={(e)=>storeProduct.setFilterProducts(e.target.value)}/>
            </div>
            <div className={classes['item-container']}>
                {storeProduct.filterProducts.map((storeProduct) =>
                  <ItemCard link={storeProduct.link}
                   name={storeProduct.name} 
                   price={storeProduct.price} 
                   key={storeProduct.name}
                   />
                  )
                }
            </div>
    </div>
    <Footer/>
    </div>
  )
})
