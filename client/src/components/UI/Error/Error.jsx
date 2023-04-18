import React, { useContext } from 'react'
import { Context } from '../../../App'
import {observer} from 'mobx-react-lite'

export default observer(function Error() {
  const {storeUser} = useContext(Context)  
  return (
    <div>{storeUser.error}</div>
  )
})


