import React, { Component } from 'react'

import { DiscountWrap } from './styledIndex'
export default class Discount extends Component {
    render() {
        return (
            <DiscountWrap className="css-1dbjc4n">
                <div className="css-1dbjc4n r-1pp923h r-1moyyf3 r-c67a83 r-1qk6wnv r-1udh08x">
                    <div>
                        <p className="showMta floorTitleMoreBox">
                            <span className="moreBox-title">{this.props.data.data[0].floorTitle.floorName}</span>
                        </p>
                        <div className="img-list">
                            {this.props.data.data[0].data.map(value => {
                                return (
                                    <div key={value.floorCellData.params.activityId}>
                                        <img
                                            alt=""
                                            draggable="false"
                                            src={value.floorCellData.imgUrl}
                                            className="css-9pa8cd"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="discount-box">
                            {this.props.data.data[1].data.map((value) => {
                                return (
                                    <div className="discount-item" key={value.floorCellData.words}>
                                        <div>
                                            <span>{value.floorCellData.title}</span>
                                            <span>{value.floorCellData.words}</span>
                                        </div>

                                        <img
                                            alt=""
                                            draggable="false"
                                            src={value.floorCellData.imgUrl}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </DiscountWrap>
        )
    }
}
