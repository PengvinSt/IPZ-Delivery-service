import React from 'react'
// import {observer} from 'mobx-react-lite'
import classes from './Modal.module.css'


export default function Modal({children, visible, setVisible}) {

    const rootClasses = [classes.Modal]
    if (visible) {
    rootClasses.push(classes.active)
    }

  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
       <div className={classes.ModalContent} onClick={(e)=>e.stopPropagation()}>
           {children}
       </div>
     </div>
  )
}
