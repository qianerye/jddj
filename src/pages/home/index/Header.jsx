import React, { Component } from "react";
import { Icon } from "antd-mobile";

export default class Header extends Component {
    render() {
        return (
            <>
                <div>
                    <div
                        className="index-address-wrapper"
                        style={{
                            backgroundImage: `url(${this.props.data.topImg})`,
                            opacity: 0
                        }}
                    ></div>
                    <div className="index-address-content">
                        <div className="location">
                            <span className="location-text">
                                共青团北京市昌平区委员会
                            </span>
                            <span className="location-text-down">
                                <div
                                    className="css-1dbjc4n r-1awozwy r-1pexk7n r-1777fci r-u8s1d"
                                    style={{
                                        left: "35%",
                                        top: "30%",
                                        width: "14px"
                                    }}
                                >
                                    <Icon type="down" size="xs" />
                                </div>
                            </span>
                        </div>
                        <i className="index-up-search"></i>
                        <div className="index-message-icon" >
                            <i className="hideDot"></i>
                        </div>
                    </div>
                </div>
                <div
                    className="search-section index-search-show-wrap"
                    style={{
                        backgroundImage: `url(${this.props.data.borderImg})`,
                        backgroundSize: "100% 100%",
                        opacity: 1
                    }}
                >
                    <div >
                        <div className="search-show index-search-show showMta">
                            <span className="search-bar-span">
                                <span className="search-bar-text">
                                    {this.props.data.searchWords}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="search-word search-word-box-index">
                        {this.props.data.recommendKeyList.map(
                            value => {
                                return (
                                    <div
                                        key={value.recommendKey}
                                        className="search-word-item  showMta index-word"
                                       
                                    >
                                        {value.recommendKey}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </>
        );
    }
}
