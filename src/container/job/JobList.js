import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Qs from 'qs';
import { reqJobList } from '../../public/api/ReqApi'
import PageNumber from '../../public/PageNumber'
import '../../CSS/Job.css'


class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: [],
            turnPage: {
                page:1,
                total:0,
                num:5,
            },
        }
        this.showJobDetail = this.showJobDetail.bind(this);
    }
    componentDidMount() {
        console.log('jm01: ',this.state)
        reqJobList(Qs.stringify({
            workPlace: this.props.workPlace,
            station: this.props.station
        }), 'POST')
            .then((res) => {
                console.log('jobList getData', res, res.data, Math.ceil(res.data.length/this.state.turnPage.num));
                this.setState({
                    jobData: res.data,
                    // jobData: this.splitArr(res.data,this.state.turnPage.num),
                    turnPage: {
                        page:1,
                        total:Math.ceil(res.data.length/this.state.turnPage.num),
                        num:5,
                    },
                });
                console.log('jm02: ',this.state)
            })
            .catch((e) => {
                console.log('网络错误,请重试', e)
            });

    }
    componentDidUpdate(nextProps,nextState) {
        if(nextProps == this.props)return;
        reqJobList(Qs.stringify({
            workPlace: this.props.workPlace,
            station: this.props.station
        }), 'POST')
            .then((res) => {
                this.setState({
                    jobData: res.data,
                    // jobData: this.splitArr(res.data,this.state.turnPage.num),
                    turnPage: {
                        page:1,
                        total:Math.ceil(res.data.length/this.state.turnPage.num),
                        num:5,
                    },
                });
            })
            .catch(e => {
                console.error('网络错误，请重试', e)
            });

    }
    /**
     * 展开隐藏列表
     * @param {表行号} id 
     * @param {*} event 
     */
    showJobDetail(id, event) {
        var elementId = document.getElementById(id);
        var showEle = elementId.getAttribute("data-show");
        if (showEle == 'true') {
            elementId.style.display = '';
            elementId.setAttribute("data-show", 'false');
        } else if (showEle == 'false') {
            elementId.style.display = 'none';
            elementId.setAttribute("data-show", 'true');
        }
    }
    /**
     * 回调函数,由分页组件执行
     * @param {分页数量} number 
     */
    changePage = (number) => {
        this.setState({
            page:number,
            turnPage: {
                page:1,
                total:Math.ceil(this.state.jobData.length/this.state.turnPage.num),
                num:5,
            },
        })
    }
    /**
     * 将data分割多个部分
     * @param {每组数量} number 
     */
    splitArr = (arr,num) => {
        try{
            console.log(arr)
            let index = 0;
            let newArr = [];
            let len = arr.length - 1;
            while(index < len){
                newArr.push(arr.slice(index, index += num));
            }
            console.log(newArr)
            return newArr;
        }catch(e){
            console.error('网络错误，请重试', e)
        }
    }
    render() {
        const { workPlace, station } = this.props;
        // const { jobData } = this.state;
        // console.log(this.splitArr(this.state.jobData,this.state.turnPage.num)[this.state.turnPage.page - 1])       
        const { jobData } = this.state;
        // let tempData = Array.from(jobData[this.state.turnPage.page - 1])
        console.log("check check",jobData)
        // let tempJobData = jobData['0'];
        let context = this;
        const dataList = jobData.length > 0 ? (
            jobData.map(function (d) {
                let duty = d.duty;
                let requirement = d.requirement;
                return (
                    <div key={d.rowId}>
                        <div className="block-h list-block-h">
                            <div><span>{d.base + '-' + d.job}</span></div>
                            <div><span>{d.station}</span></div>
                            <div><span>{d.headCount}</span></div>
                            <div><span>{d.writtenTime}</span></div>
                            <div>
                                <span>{d.interviewTime}</span>
                                <span className="arrow-down" onClick={context.showJobDetail.bind(context, d.rowId)}></span>
                            </div>
                        </div>
                        <div id={d.rowId} className="block-l list-block-h" style={{ display: 'none' }} data-show='true'>
                            <h1>工作职责：</h1>
                            <p dangerouslySetInnerHTML={{ __html: duty }}></p>
                            <h1>职位要求：</h1>
                            <p dangerouslySetInnerHTML={{ __html: requirement }}></p>
                            <div>
                                {/* <span>投递简历</span>
                                <span>收藏</span> */}
                                <Link className="btn" style={{ fontWeight: 900 }} to={{ pathname: `/uploadResume`, values: { rowId: d.rowId, job: d.job, base: d.base } }}>投递简历</Link>
                                <Link to='/' className="btn" >收藏</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="nolist-show">暂时没有岗位</div>
        );
        return (
            <div className="list-block">
                <div className="block-m list-block-h">
                    <div><span>职位名称</span></div>
                    <div><span>职位类别</span></div>
                    <div><span>招聘人数</span></div>
                    <div><span>笔试时间</span></div>
                    <div><span>面试时间</span></div>
                </div>
                {dataList}
                <PageNumber turn={this.changePage} params={this.state.turnPage}/>
            </div>
        )
    }
}

export default JobList;