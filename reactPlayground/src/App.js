import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { cart } from './cart'
import user from './user'

const App = () => {
  const renderusers=(data)=>
  {
    if(data)
    {
return data.map(user=>(
  <div>
    <li>{user.name}</li>
  <button onClick={()=>addcart(user)}>Add to cart</button>
  </div>
))
    }
  }
  const addcart = (user)=>
  {
      console.log(cart)
      cart.push(user)
  }
  return (
    <div>
    <Link to='/cart'>
    <AiOutlineShoppingCart style={{width:'200px',height:'200px'}}/>
    </Link>
      {renderusers(user)}
    </div>
  )
}

export default App
