import React from 'react';
import './center.css'

class Center extends React.Component{
    constructor(props){
        super(props)       
        this.state = {
            goodsList:[
                {
                    p1:'满10用5',
                    p2:'限洁柔纸品旗舰店部分商',
                    p3:'立即领取',
                    pic:"//image5.suning.cn/uimg/cms/img/159524444663725571.jpg",
                },
                {
                    p1:'满1000用30',
                    p2:'限自营空调品类格力品牌',
                    p3:'3立即领取',
                    pic:"//image2.suning.cn/uimg/cms/img/159524463097698057.jpg",
                },
                {
                    p1:'满10用10',
                    p2:'限商家冲饮品类商品',
                    p3:'立即领取',
                    pic:"//image2.suning.cn/uimg/cms/img/159524467488971266.jpg",
                },
            ]
        }
    }
    render(){
        // const { num,name,age,arr } = this.state;
        return (
            <div className="page1">
                <h2>领券中心</h2>
                <div className ="content">
                    {
                        this.state.goodsList.map((item,index) =>{
                            return (
                                <div key={index} className="list1">
                                    <div><img src={item.pic} alt="#"/></div>
                                    <div className="ps">
                                        <p className='p1'>{item.p1}</p>
                                        <p className='p2'>{item.p2}</p>
                                        <p className='p3'>{item.p3}</p>
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

export default Center;
