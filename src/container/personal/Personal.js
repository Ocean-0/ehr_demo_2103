import React, {Component} from 'react';
import '../../CSS/Personal.css'
import '../../CSS/Animation.css'

class Personal extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
          <div className="personal-container">
              {/* 配合 -fadeinT 异常 */}
              <div className="personal-g">
                <span>账号登陆</span>
                <div className="personal-f">
                    <div>
                        <label htmlFor="account" className="for-a"></label>
                        <input id="account" type="text" placeholder="请输入账号"></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="for-p"></label>
                        <input id="password" type="text" placeholder="请输入密码"></input>
                    </div>
                    <div className="personal-btn ">登录</div>
                    <div className="personal-options ">
                        <span><a href="/">忘记密码</a></span>
                        <span>还没有账号？</span>
                        <span><a href="/">注册账号</a></span>
                    </div>
                </div>
              </div>
          </div>  
        );
    }
}
export default Personal;