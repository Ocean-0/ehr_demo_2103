import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Qs from 'qs';
import '../../CSS/UpResume.css'


class UploadResume extends Component{
    constructor(props){
        super(props);
        console.log(this.props.location);
    }
    render(){
        return (
            <div className="uResume-container">
                <div>
                    <div className="uResume-l uResume-g">
                        
                    </div>
                    <div className="uResume-r uResume-g">
                        <div className="uResume-r-file">
                            <img src="" />
                            <a href="/">
                                <input type="file"></input>
                            </a>
                        </div>

                        <h1>基本信息</h1>
                        <div>
                            <label htmlFor="userName">姓名</label>
                            <input id="userName" type="text"></input>
                        </div>
                        <div>
                            <label htmlFor="sex">性别</label>
                            <input id="sex" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="birthday">出生日期</label>
                            <input id="birthday" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="nation">民族</label>
                            <input id="nation" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="highestEdu">最高学历</label>
                            <input id="highestEdu" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="school">学校</label>
                            <input id="school" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="idType">证件类型</label>
                            <input id="idType" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="idNum">证件号码</label>
                            <input id="idNum" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="phone">移动电话</label>
                            <input id="phone" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="email">邮箱</label>    
                            <input id="email" type="text"></input>
 
                        </div>
                        <h1>实习经历</h1>
                        <div>
                            <label htmlFor="time">时间</label>
                            <input id="time" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="station">岗位</label>
                            <input id="station" type="text"></input>

                        </div>
                        <h1>其他</h1>
                        <div>
                            <label htmlFor="certName">证书名称</label>
                            <input id="certName" type="text"></input>

                        </div>
                        <div>
                            <label htmlFor="certLevel">证书等级</label>
                            <input id="certLevel" type="text"></input>

                        </div>
                        <div>
                            <label>简历附件</label>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default UploadResume;
