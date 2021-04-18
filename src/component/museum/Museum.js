import React, { Component } from 'react';
import '../../CSS/Museum.css'
import '../../CSS/Animation.css'

class Museum extends Component {
    constructor(){
        super();
        this.myDebounce = this.myDebounce.bind(this);
    }
    myDebounce(fn, delay) {
        
        console.log(this.props.location.pathname)
        var time = null;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(time);
            console.log("delay");
            time = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    }
    showAnimation() {
        var winHeight = document.documentElement.scrollTop;
        var m1 = document.getElementsByClassName('museum-1-l')[0];
        var m2 = document.getElementsByClassName('museum-2-l')[0];
        // var m3 = document.getElementsByClassName('museum-3-l')[0];
        var m3 = document.querySelectorAll('.museum-3-l span');
        console.log(winHeight);
        // if(0 <= winHeight && winHeight < 260){
        //     m1.style.opacity = 1;
            
        // }
        if(260 <= winHeight && winHeight < 870){
            if (m2 == null)return;
            m2.classList.remove('-fastLeftIn');
            window.requestAnimationFrame(function(time) {
                window.requestAnimationFrame(function(time) {
                    m2.classList.add('-fastLeftIn');
                });
            });
            m2.style.opacity = 1;
        }
        else if(870 <= winHeight && winHeight < 1200){
            if (m3 == null)return;
            console.log(m3,m3[0],m3[1])
            m3[0].classList.remove('-wordBeatFirst');
            window.requestAnimationFrame(function(time) {
                window.requestAnimationFrame(function(time) {
                    m3[0].classList.add('-wordBeatFirst');
                });
            });
            m3[1].classList.remove('-wordBeatSecond');
            window.requestAnimationFrame(function(time) {
                window.requestAnimationFrame(function(time) {
                    m3[1].classList.add('-wordBeatSecond');
                });
            });
        }
    }
    
    componentDidMount() {
        console.log(this.props.location.pathname)
        // window.onscroll = this.myDebounce(this.showAnimation, 500);
        window.onscroll = (this.props.location.pathname === '/museum')? this.myDebounce(this.showAnimation, 500):null;
        window.onscroll();
    }
    componentWillUnmount(){
        window.onscroll = null;
    }
    render() {
        return (
            <div className="museum-container" >
                <div className="museum-1 museum-g">
                    <div className="museum-1-l museum-1-g">
                        <h1><span>广阔</span>的事业舞台</h1>
                        <p> 改变亿万网民的生活方式平等成就每一个人打造世界第一大媒体平台帮助中国企业发展，助中国经济腾飞用最聪明的头脑挑战互联网最有价值的问题 </p>
                    </div>
                    <div className="museum-1-r museum-1-g">
                        <img src="https://talent.baidu.com/external/baidu/images/museum/ab-m4.jpg" alt=""></img>
                    </div>
                </div>
                <div className="museum-2">
                    <div className="museum-2-l museum-2-g" style={{opacity: 0}}>
                        <h1><span>快速</span>的事业提升</h1>
                        <p>完善的成长机制：培训、晋升、导师、双通道发展</p>
                        <p>优秀人才脱颖而出：潜力股、最高奖、Hackathon</p>
                        <p>站在互联网最前沿，掌握最领先的产品和技术与互联网牛人共事，获得快速学习和成长</p>
                    </div>
                    <div className="museum-2-r museum-2-g">
                        <img src="https://talent.baidu.com/external/baidu/images/museum/ab-m5.jpg" alt=""></img>
                    </div>
                </div>
                <div className="museum-3 museum-g">
                    <div className="museum-3-l museum-3-g">
                        <h1><span>自</span><span>由</span>的工作氛围</h1>
                        <p>自由的工作氛围：灵活的工作时间、随意着装</p>
                        <p>平等的沟通氛围：与李彦宏等公司高管零距离聊天</p>
                        <p>人性化的工作环境：讨论区、睡眠室、母婴室、免费停车</p>
                    </div>
                    <div className="museum-3-r museum-3-g">
                        <img src="https://talent.baidu.com/external/baidu/images/museum/ab-m9.jpg" alt=""></img>
                        <img src="https://talent.baidu.com/external/baidu/images/museum/ab-m7.jpg" alt=""></img>
                    </div>
                </div>

            </div>

        );
    }

}
export default Museum;