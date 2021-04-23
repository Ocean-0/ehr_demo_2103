import React, { Component } from 'react';
import '../CSS/PageNumber.css'

class PageNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            page:1,
            total:0,
        }
    }
    componentDidMount(){
        console.log('pagenumber mou',this.props)
        this.setState({
            total: this.props.params.total
        })
    }
    /**
     * 回调父组件changePage()，修改父组件状态
     * @param {翻页方向} param 
     * @returns 
     */
    turningPages = (param) => {
        var temp = this.state.page;
        if(param == 'left'){
            temp--;
        }else if(param == 'right'){
            temp++;
        }
        if(temp > this.props.params.total || temp < 1){
            temp = null;
            return;
        }
        this.props.turn(temp);
        this.setState({page:temp})
    }

    render(){
        return (
            <div id="page-container">
                <input type="text" value={this.state.page} ></input>
                <span>&nbsp;/&nbsp;{this.props.params.total}</span>
                <span className="arrow-g arrow-l" onClick={this.turningPages.bind(this,'left')}></span>
                <span className="arrow-g arrow-r" onClick={this.turningPages.bind(this,'right')}></span>
            </div>
        );
    }
}
export default PageNumber;