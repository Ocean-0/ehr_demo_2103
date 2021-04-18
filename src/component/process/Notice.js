import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Process.css';
import '../../CSS/Job.css'


const Notice = () => {
    return (
        <div className="process-r process-g">
            <div className="process-r-c">
                <h1>2021百度校园招聘扩招网申</h1>
                <p>面向群体：全球2021届毕业生（毕业时间：2020年9月-2021年8月）</p>
                <p>网申时间：2月22日-3月14日</p>
                <p>网申方式：请在“个人中心”创建校招简历，完成简历后，进入“校招职位”投递简历。</p>
            </div>
            <div className="process-r-c">
                <h1>笔试</h1>
                <p>笔试形式：在线笔试</p>
                <p>通知方式：笔试前1-2天以短信以及邮件的形式发送给大家，请及时查看短信和邮件</p>
                <p>笔试时间：3月17日</p>
                <p>结果查询：点击“个人中心”，查看自己目前的应聘状态。</p>
            </div>
            <div className="process-r-c">
                <h1>面试</h1>
                <p>面试形式：远程面试</p>
                <p>通知方式：面试前1-3天以电话或短信以及邮件的形式发送，届时请注意查看短信和邮件</p>
                <p>面试时间：3月中旬-4月中旬</p>
                <p>结果查询：点击“个人中心”，查看自己目前的应聘状态。</p>
            </div>
            <div className="process-r-c">
                <h1>Offer</h1>
                <p>Offer时间：3月下旬起</p>
                <p>完成签约的同学，请点击“个人中心” - “投递进度” - “面试通过”的链接，前往offer系统完善个人信息，并发起入职申请。</p>
            </div>
        </div>  
    );
}

class ChooseNotice extends Component {
    submitTabId(id){
        this.props.tab(id);
    }
    showTabDetail(){
        var elementId = document.getElementById('tabList');
        var showEle = elementId.getAttribute("data-show");
        if(showEle == 'true'){
            elementId.style.display = '';
            elementId.setAttribute("data-show",'false');
        }else if(showEle == 'false'){
            elementId.style.display = 'none';
            elementId.setAttribute("data-show",'true');
        }
    }
    render(){
        return (
            <div className="process-l process-g">
                <div className="process-l-n">
                    <div>
                        <span onClick={this.submitTabId.bind(this,0)}>招聘流程</span>
                        <span className="arrow-down" onClick={this.showTabDetail.bind(this)}></span>
                    </div>
                    <div id="tabList" data-show='false'>
                        <span>笔试</span>
                        <span>面试</span>
                        <span>offer发送</span>
                    </div>
                    <div>
                        <span onClick={this.submitTabId.bind(this,1)}>常见问题</span>
                    </div>
    
                </div>
            </div>
        );
    
    }
}

export { Notice, ChooseNotice };