import React from 'react'
import { Route } from 'react-router-dom'
import Socketpage from './Socket'
import App from './App'
import Practice from './Practice'

const Router = () => {
    return (
        <div>
            <div>
                <Route path='/' exact component={App}/>
                <Route path='/practice' component={Practice}/>
                <Route path='/socket' component={Socketpage}/>
            </div>
        </div>
    )
}

export default Router
