import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
            
            <div className="nav-left">
                <Link to='/' className="nav-left-postion nav-left-font" >百度</Link>
            </div>
            
            <ul className="nav-center">
                <li><Link to='/home' className="nav-left-font" >首页</Link></li>
                <li><Link to='/jobList' className="nav-left-font" >校招职位</Link></li>
                <li><Link to='/process' className="nav-left-font"  >流程动态</Link></li>
                <li><Link to='/museum' className="nav-left-font" >了解百度</Link></li>
                <li><Link to='/personal' className="nav-left-font" >个人中心</Link></li>
            </ul>

            <ul className="nav-right">
                <li><Link to='/' className="nav-left-font">登录</Link></li>
                <li><Link to='/' className="nav-left-font">注册</Link></li>
                <li><Link to='/' className="nav-left-font">微信</Link></li>
                <li><Link to='/' className="nav-left-font">QQ</Link></li>
            </ul>            
          
        </nav>
    )
}
export default Navbar;
