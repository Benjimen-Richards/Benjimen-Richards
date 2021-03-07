import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Practice = () => {
    const [text, setText] = useState(0)
   const counthandler=()=>
    {
        setText(text+1)
    }
   const decrement=()=>
    {
        setText(text-1)
    }
    useEffect(()=>{
        const abc= async()=>
        {
            const data =await axios.get('https://login-with-jwt-richards.herokuapp.com/hotel/users')
            console.log(data.data)
        }
       abc()
    },[text])
    return (
        <div>
            <h1>{text}</h1>
            <button  onClick={counthandler}>Increment</button>
            <button  onClick={decrement}>decrement</button>
        </div>
    )
}

export default Practice
