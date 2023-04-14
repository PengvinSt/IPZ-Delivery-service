import React from 'react'
import classes from './CardPage.module.css'



export default function CardPage({children}) {
  return (
    <div className={classes.card}>
        {children}
    </div>
  )
}
