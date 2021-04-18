import React, {Component} from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import JobFilter from './container/job/JobFilter';
import Process from './component/process/Process';
import Museum from './component/museum/Museum';
import UploadResume from './container/resume/UploadResume'
import Personal from './container/personal/Personal';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import './CSS/App.css'

class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>        
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={Home} />

            <Route path='/:data_id' component={Post} /> */}

            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/jobList' component={JobFilter} />
            <Route path='/process' component={Process} />
            <Route path='/museum' component={Museum} />
            <Route path='/personal' component={Personal} />
            <Route path='/uploadResume' component={UploadResume} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  
  }
}

export default App;
