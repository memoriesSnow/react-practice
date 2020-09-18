import React from 'react'
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return(
            <div>Home组件
                <div>
                    <Link to="/page1">去page1</Link>
                    <Link to="/page2">去page2</Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Home