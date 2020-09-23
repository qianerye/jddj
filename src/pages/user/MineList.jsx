import React, { Component } from "react";

export default class MineList extends Component {
    render() {
        return (
            <div className="index-module__mine-list___3yULQ">
                {this.props.data.map((value, index) => {
                    return (
                        <div
                            className="index-module__mine-item____nDyI"
                            key={value.name}
                        >
                            <div className="">
                                <div className="taro-img index-module__user-item-icon___C28j7">
                                    <img
                                        alt=""
                                        className="taro-img__mode-scaletofill"
                                        src={value.img}
                                    />
                                </div>
                                <div className="">
                                    <span className="taro-text index-module__user-item-text___1CtOU">
                                        {value.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
