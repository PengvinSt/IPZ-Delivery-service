import React from 'react'
import classes from './AdminColumn.module.css'
import { observer } from 'mobx-react-lite'
export default observer(function AdminColumn({children}) {
  return (
    <div className={classes['admin-column']}>
        {children}
    </div>
  )
})
