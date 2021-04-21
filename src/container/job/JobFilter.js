import React, { Component } from "react";
import JobList from "./JobList"
import '../../CSS/Job.css'

class JobFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workPlace: "不限",
            station: "不限",
        };       
    }
    getWorkPlace(type,event){
        let choose = event.target.innerText;
        // 避免点击ul打印全部选项
        if(choose.length >= 10)return;
        if(type === 'workp'){
            this.setState({
                workPlace:choose,
            });
        }else if(type === 'station'){ 
            var temp = choose.substr(0,2);        
            this.setState({
                station:(temp  == '工程')?'技术':temp,
            });
        };
 
        for(let i = 0; i < event.currentTarget.childNodes.length; i++){
            event.currentTarget.childNodes[i].firstElementChild.style.background = '';
        }
        // 【事件流】   点错误的元素但没有子节点
        if(event.target.firstElementChild == null)return;
        event.target.firstElementChild.style.background = '#6b48c0';
    }
    componentDidMount(){
        if(this.props.location.station != null){
            this.setState({
                station:this.props.location.station,
            })
        } 
    }
    render() {
        return (
            <div className="jobfilter-container">
                    <div className="jobfilter-workPlace jobfilter-g">
                        <div className="j-f-01">
                            <p>我想工作的城市：</p>
                        </div>
                        <div className="j-f-02">
                            <ul onClick={this.getWorkPlace.bind(this,'workp')}>
                                <li><span></span>不限</li>
                                <li><span></span>北京</li>
                                <li><span></span>上海</li>
                                <li><span></span>深圳</li>
                                <li><span></span>广州</li>
                                <li><span></span>成都</li>
                            </ul>
                        </div>
                    </div>
                    <div className="jobfilter-station jobfilter-g">
                        <div className="j-f-01 j-f-g">
                            <p>我未来想成为：</p>
                        </div>
                        <div className="j-f-02">
                            <ul onClick={this.getWorkPlace.bind(this,'station')}>
                                <li><span></span>不限</li>
                                <li><span></span>工程狮</li>
                                <li><span></span>产品汪</li>
                                <li><span></span>体验喵</li>
                                <li><span></span>职能Baymax</li>
                            </ul>
                        </div>
                    </div>

                <JobList workPlace={this.state.workPlace} station={this.state.station}/>
            </div>
        )
    }
}

export default JobFilter;