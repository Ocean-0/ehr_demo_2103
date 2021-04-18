import React, { Component } from 'react';
import { Notice, ChooseNotice } from './Notice'
import Problem from './Problem'
import '../../CSS/Process.css'


class Process extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab:0,
        }
        this.chooseTab = this.chooseTab.bind(this);
    }
    chooseTab(tabId){
        this.setState({tab:tabId});
    }
    render(){
        return (
            <div className="process-container">
                <div>
                    <ChooseNotice tab={this.chooseTab}/>
                    {showTab(this.state.tab)}
                </div>
            </div>
        );
    
    }
}
function showTab(tabId){
    switch (tabId) {
        case 0:
          return <Notice/>
          break;
        case 1:
          return <Problem/>
          break;
        default:
          return <Notice/>
          break;
      }
}

export default Process;
