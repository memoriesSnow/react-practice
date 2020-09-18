import React from 'react'
import { Link } from 'react-router-dom'
class Child extends React.Component{
    render(){
        return(
            <div>
                 <Link to="/page2/age1">去age1</Link>
                 <Link to="/page2/age2">去age2</Link>
                 <div>
                     {this.props.children}
                 </div>
            </div>
        )
    }
}
export default Child