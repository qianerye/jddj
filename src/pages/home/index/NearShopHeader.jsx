import React, { Component } from 'react'

import { Modal } from 'antd-mobile'
export default class NearShop extends Component {
    state = {
        levelSortNum: 1,
        modal2: false
    }
    showModal = key => e => {
        e.preventDefault() // 修复 Android 上点击穿透
        this.setState({
            [key]: true
        })
    }
    onClose = key => () => {
        this.setState({
            [key]: false
        })
    }

    render() {
        return (
            <>
                <p data-useraction="" className="showMta floorTitleMoreCard">
                    <span className="moreBox-title">
                        {this.props.data.data.floorTitle.floorName}
                    </span>
                </p>
                <Modal
                    popup
                    visible={this.state.modal2}
                    animationType="slide-down"
                    onClose={this.onClose('modal2')}
                >    
                    <div className="all-storeTags-fixed-box" style={{textAlign : 'left'}}>
                        <div className=" store-sort-box border-t">
                            {this.props.data.config.storeTags.sortList.map(
                                value => {
                                    return (
                                        <span
                                            key={value.levelSortNum}
                                            className={`store-sort-tag showMta ${
                                                value.levelSortNum ===
                                                this.state.levelSortNum
                                                    ? 'store-sort-slt-tag'
                                                    : ''
                                            }`}
                                        >
                                            {value.name}
                                        </span>
                                    )
                                }
                            )}
                            <div className="store-all-filter-tag-box store-all-filter-default" onClick={this.onClose('modal2')}>
                                <span className="store-all-filter-tag" >筛选</span>
                            </div>
                        </div>
                        <div className="all-storeTags-show-box">
                            <div className="all-storeTags-show-content">
                                {this.props.data.config.storeTags.storeFilterTags.map(
                                    value => {
                                        return value.parentId === 0 ? (
                                            <div key={value.name} className="">
                                                <span className="parent-store-tag">
                                                    {value.name}
                                                </span>
                                                <div className="allstore-filter-box flex flex-justify-between flex-wrap">
                                                    {this.props.data.config.storeTags.storeFilterTags.map(
                                                        (item, index) => {
                                                            return index > 0 &&
                                                                value.tagId ===
                                                                    item.parentId ? (
                                                                <span
                                                                    key={item.name}
                                                                    className="store-filter-innerbox"
                                                                    style={{marginLeft : 0 , width : '31%' ,marginTop : '10px'}}
                                                                >
                                                                    <label className="store-filter-tag ">
                                                                        {item.name}
                                                                    </label>
                                                                </span>
                                                            ) : (
                                                                ''
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        )
                                    }
                                )}
                            </div>
                            <div className="all-storeTags-footer flex">
                                <button
                                    type="button"
                                    className="defaultButton all-store-reset-btn disabled-reset"
                                >
                                    重置
                                </button>
                                <button
                                    type="button"
                                    className="defaultButton all-store-check-btn"
                                >
                                    <span>查看{this.props.data.config.storeConfig.totalCount}个店铺</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="store-all-filter-box">
                    <div className=" store-sort-box border-t">
                        {this.props.data.config.storeTags.sortList.map(
                            value => {
                                return (
                                    <span
                                        key={value.levelSortNum}
                                        className={`store-sort-tag showMta ${
                                            value.levelSortNum ===
                                            this.state.levelSortNum
                                                ? 'store-sort-slt-tag'
                                                : ''
                                        }`}
                                    >
                                        {value.name}
                                    </span>
                                )
                            }
                        )}
                        <div className="store-all-filter-tag-box store-all-filter-default">
                            <span className="store-all-filter-tag" onClick={this.showModal('modal2')}>筛选</span>
                        </div>
                    </div>
                    <div className="store-filter-box">
                        {this.props.data.config.storeTags.storeFilterTags.map(
                            (value, index) => {
                                return index < 4 ? (
                                    <span
                                        key={value.name}
                                        className="store-filter-innerbox"
                                    >
                                        <label className="store-filter-tag ">
                                            {value.name}
                                        </label>
                                    </span>
                                ) : (
                                    ''
                                )
                            }
                        )}
                    </div>
                </div>
            </>
        )
    }
}
