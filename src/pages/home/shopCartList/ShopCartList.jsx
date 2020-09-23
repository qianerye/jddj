import React, { Component } from "react";

export default class ShopCartList extends Component {
    render() {
        return (
            <div>
                <div className="cart-panel">
                    <div className="tip-wrap ">
                        <div className="tip-box">
                            <div className="tip-icon tip-icon-unLogin"></div>
                            <p className="tip-message">
                                购物车还空空如也哦~
                                <br/>
                                登录后将同步购物车中商品
                            </p>
                            <div className="tip-btn">立即登录</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
