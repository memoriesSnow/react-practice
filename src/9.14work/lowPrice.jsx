import React from 'react';
import './lowPrice.css'

class Price extends React.Component{
    constructor(props){
        super(props)       
        this.state = {
            goodsList:[
                {
                    name:'【第二件6.9元】网红雪梅',
                    oldPrice:'19.9',
                    newPrice:'9.90',
                    pic:"//imgservice.suning.cn/uimg1/sniss/improve/457G47z2sGmcLdEEaeorDA.jpg",
                },
                {
                    name:'飞利浦(Philips)电动牙刷',
                    oldPrice:'459',
                    newPrice:'359.00',
                    pic:"//imgservice.suning.cn/uimg1/sniss/improve/vDa3mTPiFG1g9lfbk_O83w.jpg",
                },
                {
                    name:'白猫经典配方洗洁精2000g',
                    oldPrice:'0',
                    newPrice:'16.90',
                    pic:"//imgservice.suning.cn/uimg1/sniss/improve/KSxObmSawNFJgRZNuhxtTA.jpg",
                },
            ]
        }
    }
    render(){
        // const { num,name,age,arr } = this.state;
        return (
            <div className="page">
                <h2>天天低价</h2>
                <div className='content'>
                {
                    this.state.goodsList.map((item,index) =>{
                        return (
                            <div key={index} className="list">
                                <div><img src={item.pic} alt="#"/></div>
                                <div>
                                    <p className="p0">{item.name}</p>
                                    <p>
                                        <span className='np'>￥{item.newPrice}</span>
                                        <span className='op'>￥{item.oldPrice}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Price;
