import React, { Component } from "react";

import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    changeNav(nowNav , url) {
        dispatch({
            type: "SagaGetFaxianNav",
            nowNav,
            url
        });
    }
});

@connect(null , mapDispatchToProps)
class Herder extends Component {
    state = {
        tableBar: [
            {
                key: "follow",
                name: "关注",
                url : 'client?_jdrandom=1576293051626&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22feedTab%22%7D&signKey=7c02b8b67f6defad1b5f0f6caff7fffc&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293051625'
            },
            {
                key: "recipes",
                name: "食谱",
                url : 'client?_jdrandom=1576293203080&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22recipeTab%22%7D&signKey=564d33818dde24939eafe1747e7d69cf&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293203080'

            },
            {
                key: "recommend",
                name: "推荐",
                url : 'client?_jdrandom=1576293639313&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22recommend%22%7D&signKey=a2a1058a65e5e79fd004929c9a1540c8&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293639313'

            },
            {
                key: "fashion",
                name: "时尚美妆",
                url : 'client?_jdrandom=1576293651968&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22fuzhuang%22%7D&signKey=616bd19c5b528894b9a19d8165f1ce43&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293651968'

            },
            {
                key: "life",
                name: "生活",
                url : 'client?_jdrandom=1576293666079&platCode=H5&appName=paidaojia&channel=&appVersion=7.3.0&jdDevice=&functionId=newFeed%2FcontentList&body=%7B%22longitude%22:116.231575,%22latitude%22:40.220657,%22cityId%22:1,%22currentPage%22:1,%22careType%22:1,%22pageSize%22:21,%22tabType%22:%22redian%22%7D&signKey=daef16c83b8e29d7c526324b6a6af82b&lng=116.231575&lat=40.220657&city_id=1&poi=%E5%85%B1%E9%9D%92%E5%9B%A2%E5%8C%97%E4%BA%AC%E5%B8%82%E6%98%8C%E5%B9%B3%E5%8C%BA%E5%A7%94%E5%91%98%E4%BC%9A&jda=122270672.2400374453.1572015015.1575893835.1576289472.7&traceId=H5_DEV_DEFCBD87-F946-461B-8B72-62B29508DFF01576293666079'

            }
        ],
        currentIndex: 0
    };

    handleNavClick = index => {
        this.setState({
            currentIndex: index
        });
    };

    render() {
        return (
            <div className="tab-bar-box">
                <div className="tab-bar">
                    <ul className="tab-bar-ul">
                        {this.state.tableBar.map((value, index) => {
                            return (
                                <li
                                    key={value + index}
                                    onClick={() => {
                                        this.handleNavClick(index);
                                        this.props.changeNav(value.key , value.url);
                                    }}
                                    className={`tab-bar-li ${
                                        this.state.currentIndex === index
                                            ? "on"
                                            : ""
                                    }`}
                                >
                                    {value.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Herder;
