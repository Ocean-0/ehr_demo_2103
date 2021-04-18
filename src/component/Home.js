import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CachedData from '../tools/CheckCache'
import '../CSS/Home.css'
import '../CSS/Animation.css'


class Home extends Component{
    constructor(){
        super();
        this.state = {
            keyWords:[
                '工程开发测试研发架构运维前后',
                '产品运营经理专员分析',
                '设计视觉交互体验'
            ],
        }
    }
    getJob(e){
        if(e.charCode == 13){
            var input = document.getElementById('homeInput');
            console.log('getJob:',input,input.value);
            var index = 0;
            index = this.getSameStr(this.state.keyWords,input.value);
            console.log('result ',index);
            if(index == -1){                
                input.classList.remove('-fadeinT');
                // 01
                // input.classList.remove('-inputBounce');
                // input.offsetWidth = input.offsetWidth;
                // input.classList.add('-inputBounce');
                // 02
                // input.style.animation = "";
                // input.style.animation = "inputBounce .7s";
                // 03
                input.className = "";
                window.requestAnimationFrame(function(time) {
                    window.requestAnimationFrame(function(time) {
                      input.className = "-inputBounce";
                    });
                });
                // 04
                // input.className = "";
                // var timer
                // clearTimeout(timer);
                // timer = setTimeout(function(){
                //     input.className = "-inputBounce";
                // },1)
                // input.className = "";

            }
            var indexTemp;
            switch(index){
                case 0:
                    indexTemp = this.getSameStr(engineer.data,input.value);
                    console.log(indexTemp,engineer.data[indexTemp]);
                    input.value = engineer.data[indexTemp];
                    this.props.history.push({pathname:'/jobList',station:'技术'});
                    break;
                case 1:
                    indexTemp = this.getSameStr(product.data,input.value);
                    console.log(indexTemp,product.data[indexTemp]);
                    input.value = product.data[indexTemp];
                    this.props.history.push({pathname:'/jobList',station:'产品'});
                    break;
                case 2:
                    indexTemp = this.getSameStr(designer.data,input.value);
                    console.log(indexTemp,designer.data[indexTemp]);
                    input.value = designer.data[indexTemp];
                    this.props.history.push({pathname:'/jobList',station:'设计'});
                    break;
                default:
                    break;

            }
        }

    }
    getSameStr(str,target){
        console.log('begin1 ',str ,target);
        if(str.length == 0 || target.length == 0)return '';
        
        var maxLen = -1,index = -1;
        for(var j = 0; j < str.length; j++ ){
            var max = '', min = '';
            var count = 0;
            max = (str.length > target.length)? str[j]:target;
            min = (max == str[j])? target:str[j];
            for(let i = 0; i < min.length; i++){
                if(max.indexOf(min[i]) >= 0){
                    count++;
                }
            }
            console.log(count);
            if(count > maxLen){
                if(count != 0){
                    index = j;
                }
                maxLen = count;
            }
        }
        return index;
    }
    render(){
        console.log(this.props)
        return (
            <div className="home-container">
                <div>
                    <input id="homeInput" className="-fadeinT" type="text" onKeyPress={this.getJob.bind(this)} placeholder="输入您的意向岗位"></input>
                </div>
            </div>
        );
    }
}

const engineer = {
    data:[
        '芯片验证工程师',
        '售前解决方案工程师',
        '运维开发工程师',
        '客户端开发工程师',
        'Java研发工程师',
        '大数据研发工程师',
        '芯片软件系统架构工程师',
        'C++/PHP研发工程师',
        '移动软件研发工程师',
        'Web前端研发工程师',
        '机器学习/数据挖掘/自然语言处理工程师',
        '开发测试工程师',
        '计算机视觉算法研发工程师',
    ]
}
const product = {
    data:[
        '商业产品经理',
        '医学专员',
        '数据分析师',
        '产品经理',
        '产品运营',
        '产品经理（AI方向）',
        '产品经理（云计算）',
        '产品经理（医疗）',
    ]
}
const designer = {
    data:[
        '视觉设计师（运营）',
        '视觉设计师',
        '交互设计师',
    ]
}

export default Home;