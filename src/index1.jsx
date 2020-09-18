// 根组件
//  react中的一些基础语法
import React,{Component} from 'react';
// import './home.css';
class Home extends Component{
    constructor(props){
        super(props)
        console.log(props)
        // data函数，写变量的一个对象
        this.state = {
            num:100,
            name:'ff',
            age:23,
            arr:[5,6,7,8]
        }
    }

    handleClick = () =>{
        alert('真难下载啊。。。')
    }
    // handleClick(){
    //     alert('真难下载啊。。。')
    // }
    render(){
        // state中的是数据
        const { num,name,age,arr } = this.state;
        // props中的是属性
        const { names,ages,sexs }  = this.props;
        const title = '我是跟组件';
        return (
        <div onClick={this.handleClick} className="home">{ title }-{ num } -{name} -{age }
            {
                arr.map((item,index) =>{
                    return <div key={index}>{ item }</div>
                })
            }
            <div>{ names }{ ages }{ sexs }</div>
        </div>
        )
    }
}

export default Home;
