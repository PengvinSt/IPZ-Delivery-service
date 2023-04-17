import React, { useContext } from 'react'
import classes from './ItemCard.module.css'
import { Context } from '../../../App'
export default function ItemCard({link, name, price}) {
  const {storeProduct} = useContext(Context)
  return (
    <div className={classes['item-card']} onClick={()=>{storeProduct.setCart({name, price, id: Date.now()})}} >
        {
            (link.length)
            ? <div className={classes['item-img']}><img src={link} alt="product img"/></div>
            : <div className={classes['item-img']}>No img</div>
        }
        {
            (name.length)
            ? <div className={classes['item-name']}>{name}</div>
            : <div className={classes['item-name']}>No name</div>
        }
        {
          (price.length)
          ? <div className={classes['item-name']}>{price} $</div>
          : <div className={classes['item-name']}>No price</div>
        }
    </div>
  )
}
