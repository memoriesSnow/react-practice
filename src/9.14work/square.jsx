import React from 'react';
import './square.css'

class Square extends React.Component{
    constructor(props){
        super(props)       
        this.state = {
            goodsList:[
                {
                    h:'母婴玩具',
                    info:'妈妈放心购',
                    img1:'//imgservice.suning.cn/uimg1/sniss/improve/GXEFIcdqtsNb-URWm8804g.jpg',
                    img2:"//imgservice.suning.cn/uimg1/sniss/improve/THHZokunwDKvo1AFy7tVlQ.jpg",
                },
                {
                    h:'苏宁超市',
                    info:'为你挑好的',
                    img1:'//imgservice.suning.cn/uimg1/sniss/improve/rRbMCtQoL6-u2uyorWMo8w.jpg',
                    img2:"//imgservice.suning.cn/uimg1/sniss/improve/i-4SfOaOqT3s8H2UhfzH7w.jpg",
                },
                {
                    h:'苏宁家电',
                    info:'买家电上苏宁',
                    img1:'//imgservice.suning.cn/uimg1/sniss/improve/4jccGf71QDfqoZ2c2oD9Sg.jpg取',
                    img2:"//imgservice.suning.cn/uimg1/sniss/improve/K-cd8zJnlpqJ6AtgB2B2zg.jpg",
                },
                {
                    h:'服饰家纺',
                    info:'品质服饰',
                    img1:'//image.suning.cn/uimg/b2c/qrqm/0000000000000000010627834237.jpg?ver=2000',
                    img2:"//image.suning.cn/uimg/b2c/qrqm/0070130108000000010542883982.jpg?ver=2000",
                },
                {
                    h:'苏宁国际',
                    info:'快享全球好货',
                    img1:'//imgservice.suning.cn/uimg1/sniss/improve/p6EHIAGuW5B9jgV-uH7ajw.jpg',
                    img2:"//image.suning.cn/uimg/b2c/qrqm/0000000000000000010180665118.jpg?ver=2006",
                },
                {
                    h:'生活家电',
                    info:'潮流小家电',
                    img1:'//image.suning.cn/uimg/b2c/qrqm/0000000000000000010591170237.jpg?ver=2000',
                    img2:"//imgservice.suning.cn/uimg1/sniss/improve/yZxoqRcRnKumuD-ny4a7SQ.jpg",
                }
            ]
        }
    }
    render(){
        // const { num,name,age,arr } = this.state;
        return (
            <div className="channel">
                <h2>频道广场</h2>
                <div className ="contents">
                    {
                        this.state.goodsList.map((item,index) =>{
                            return (
                                <div key={index} className="lists">
                                    <p>
                                        <span className='sp1'>{item.h}</span>
                                        <span className='sp2'>{item.info}</span>
                                    </p>
                                    <div>
                                        <img src={item.img1} alt="#"/>
                                        <img src={item.img2} alt="#"/>
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

export default Square;
