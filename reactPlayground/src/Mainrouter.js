import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import CArtrender from './CArtrender'

const Router = () => {
    return (
        <div>
            <div>
                <Route path='/' exact component={App}/>
                <Route path='/cart' component={CArtrender}/>
            </div>
        </div>
    )
}

export default Router
