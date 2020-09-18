import React,{Component} from 'react'
import Home from './home'

import Page1 from './component/page1.jsx'
import Page2 from './component/page2.jsx'

import Child from './component/child'

import Age1 from './component/age/age1'
import Age2 from './component/age/age2'

import {
    BrowserRouter,
    // HashRouter,
    Route,
    Redirect
} from 'react-router-dom'


class ERouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Home>
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" render={()=>
                        <Child>
                            <Route path="/page2/age1" component={Age1}/>
                            <Route path="/page2/age2" component={Age2}/>
                        </Child> 
                    } />
                    <Redirect from="/" to="/page2" />
                </Home>
            </BrowserRouter>
        )
    }
}
export default ERouter