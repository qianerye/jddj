import React, { Component } from "react";

export default class NeedLogin extends Component {
    render() {
        return (
            <div className="tip-wrap ">
                <div className="tip-box">
                    <div className="tip-icon tip-icon-unLogin"></div>
                    <p className="tip-message">登录后才能查看订单哦</p>
                    <div className="tip-btn">立即登录</div>
                </div>
            </div>
        );
    }
}
