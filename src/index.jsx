import React,{ Component } from 'react'

class Home extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            num:12,
            name:'zimo',
            date:'9.14',
            arr:[1,2,3]
        }
    }
    render(){
        const {num,name,date,arr} = this.state;
        return(
            <div onClick="this.handleClick">
                {num}-{name}-{this.state.date}
                <div>
                    {
                        arr.map((item,index) => {
                            return <div key={index}>{item}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Home

