import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Qs from 'qs';
import { reqJobList } from '../../api/ReqApi'
// import CachedData from '../../tools/CheckCache'
import '../../CSS/Job.css'


class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobData: [],
        }
        this.showJobDetail = this.showJobDetail.bind(this);
    }
    componentDidMount() {
        reqJobList(Qs.stringify({
            workPlace: this.props.workPlace,
            station: this.props.station
        }), 'POST')
            .then((res) => {
                console.log('jobList getData', res, res.data);
                this.setState({
                    jobData: res.data,
                });
            })
            .catch((e) => {
                console.log('网络错误,请重试', e)
            });

        // axios.post('http://localhost:8081/getJobListPart', Qs.stringify({
        //     workPlace: this.props.workPlace,
        //     station: this.props.station
        // }))

    }
    componentDidUpdate(nextProps,nextState) {
        if(nextProps == this.props)return;
        reqJobList(Qs.stringify({
            workPlace: this.props.workPlace,
            station: this.props.station
        }), 'POST')
            .then((res) => {
                console.log('jobList getData', res, res.data);
                this.setState({
                    jobData: res.data,
                });
            })
            .catch(e => {
                console.error('网络错误，请重试', e)
            });

    }
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
    render() {
        const { workPlace, station } = this.props;
        const { jobData } = this.state;
        console.log('joblist:', workPlace, station, jobData.length);
        console.log(jobData)
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
            </div>
        )
    }
}

export default JobList;