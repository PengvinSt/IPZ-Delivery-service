import React, { useContext } from 'react'
import classes from './Cart.module.css'
import { Context } from '../../../App'
import { observer } from "mobx-react-lite";


export default observer(function Cart(props) {
  const {storeProduct} = useContext(Context)
  return (
    <div className={classes['cart']}>
    <div>
    {(storeProduct.cart.length === 0) && <p>No items selected</p>}
    {storeProduct.cart.map(cart=>
    <div className={classes['cart-items']} key={cart.id}>
      <div>{cart.name}</div>
      <div>{cart.price}</div>
      {/* <div>{cart.id}</div> */}
      <button onClick={()=>{storeProduct.deleteCart(cart.id,cart.price)}}>X</button>
    </div>)}
    </div>
  <div className={classes['cart-total']}><hr/>Total price: ({storeProduct.cart.length} pr.) {storeProduct.price}$ <button onClick={()=>{storeProduct.submitCart()}}>Submit</button><hr/></div>
</div>
  )
})
