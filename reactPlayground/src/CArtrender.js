import React from 'react'
import { cart } from './cart'

const CArtrender = () => {
    const rendercart = (data)=>
    {
        if(data)
        {
            return data.map(cart=>(
                <div>
                    <li>{cart.name}</li>
                    <button onClick={()=>deleteuser(cart)}>delete to cart</button>
                </div>
            ))
        }
    }
    const deleteuser=(user)=>{
        if(user)
        {
            cart.pop(cart.indexOf(user))
        }
        console.log(cart)
    }
    return (
        <div>
            <h1>cart</h1>
            {rendercart(cart)}
        </div>
    )
}

export default CArtrender
