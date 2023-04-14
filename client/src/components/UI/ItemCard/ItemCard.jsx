import React from 'react'
import classes from './ItemCard.module.css'
export default function ItemCard(props) {
  return (
    <div className={classes['item-card']} onClick={()=>alert('To next page!')}>
        {
            (props.link.length)
            ? <div className={classes['item-img']}><img src={props.link} alt="product img"/></div>
            : <div className={classes['item-img']}>No img</div>
        }
        {
            (props.name.length)
            ? <div className={classes['item-name']}>{props.name}</div>
            : <div className={classes['item-name']}>No name</div>
        }
    </div>
  )
}
