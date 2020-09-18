import React from 'react';
import './live.css'

class Live extends React.Component{
    constructor(props){
        super(props)       
        this.state = {
            goodsList:[
                {
                    pic:"http://image2.suning.cn/uimg/cms/img/160004622567076898.jpg",
                },
                {
                    pic:"http://image2.suning.cn/uimg/cms/img/160004624122237784.jpg",
                },
                {
                    pic:"http://image2.suning.cn/uimg/cms/img/160004625467790248.jpg",
                },
            ]
        }
    }
    render(){
        // const { num,name,age,arr } = this.state;
        return (
            <div className="page">
                <h2>苏宁直播</h2>
                <div className='content'>
                {
                    this.state.goodsList.map((item,index) =>{
                        return (
                            <div key={index} className="list">
                                <div><img src={item.pic} className="img" alt="#"/></div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Live;
