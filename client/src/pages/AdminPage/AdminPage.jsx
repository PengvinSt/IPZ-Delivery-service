import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/UI/Navbar/NavBar'
import AdminColumn from '../../components/UI/Admin/AdminColumn'
import classes from './AdminPage.module.css'
import { Context } from '../../App'
import { observer } from 'mobx-react-lite'
// import ItemCard from '../../components/UI/ItemCard/ItemCard'


export default observer(function AdminPage() {
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const {storeProduct, storeUser} = useContext(Context)
  useEffect(()=>{
    storeProduct.getProducts()
    storeUser.getPartners()
  },[storeProduct,storeUser, storeProduct.products, storeUser.partners])
  return (
    <div>
      <NavBar/>
      <div className={classes['main']}>
      <AdminColumn>
      {storeProduct.products.map((Product) =>
        // <ItemCard link={storeProduct.link} name={storeProduct.name} price={storeProduct.price} key={storeProduct.name}/>
        <div key={Product.name}>
          <hr/>
          <p>{(Product.link.length === 0)? "No" : "Yes"} - link on photo</p>
          <p>{Product.name} - name</p>
          <p>{Product.price} - price ($)</p>
          <button onClick={()=>storeProduct.deleteProduct(Product.name)}>Delete</button>
          <hr/>
        </div>
      )}
      </AdminColumn>
      <AdminColumn>
        {storeUser.partners.map((partner)=>
        <div key={partner._id}>
          <hr/>
          <p>{partner.name} - name</p>
          <p>{partner.email} - email</p>
          <p>{partner.phone} - phone number</p>
          <button onClick={()=>storeUser.deletePartners(partner._id)}>Delete</button>
          <hr/>
        </div>
        )}

      </AdminColumn>
      <AdminColumn>
        <p>Link(full)</p>
      <input onChange={(e)=>{setLink(e.target.value)}} value={link}/>
        <p>Name(require, unique)</p>
      <input onChange={(e)=>{setName(e.target.value)}} value={name}/>
      <p>Price(require)</p>
      <input onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
      <button onClick={()=>{storeProduct.createProduct(link,name,price)}}>Click to create</button>
      </AdminColumn>
      </div>
    </div>
  )
})
