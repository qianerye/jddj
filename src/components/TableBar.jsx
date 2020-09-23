import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
export default class TableBar extends Component {
    render() {
        return (
            <div className="navigation footer-nav ipx-pad" style={{ zIndex: 900 }}>
            <NavLink activeClassName='active' aria-current="page" className="navigation-item" to="/index">
                <i className="iconfont icon-home"></i>
                <span className="navigation-item-label">首页</span>
            </NavLink>
            <NavLink activeClassName='active' className="navigation-item" to="/faxian">
                <i className="iconfont icon-discovery"></i>
                <span className="navigation-item-label">发现</span>
            </NavLink>
            <NavLink activeClassName='active' className="navigation-item" to="/shopCartList">
                <i className="iconfont icon-cart"></i>
                <span className="navigation-item-label">购物车</span>
            </NavLink>
            <NavLink activeClassName='active' className="navigation-item " to="/orderlist">
                <i className="iconfont icon-order"></i>
                <span className="navigation-item-label">订单</span>
            </NavLink>
            <NavLink className="navigation-item " activeClassName='active' to='/user'>
                <i className="iconfont icon-user"></i>
                <span className="navigation-item-label">我的</span>
            </NavLink>
            <div className="message-wrap"></div>
        </div>
        )
    }
}
