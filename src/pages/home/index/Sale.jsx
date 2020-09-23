import React, { Component } from 'react'

import { SaleWrap } from './styledIndex'
export default class Sale extends Component {
    render() {
        return (
            <SaleWrap className="css-1dbjc4n">
                <div className="css-1dbjc4n r-1pp923h r-1moyyf3 r-c67a83 r-1qk6wnv r-1udh08x">
                    <div>
                        <p className="showMta floorTitleMoreBox">
                            <span className="moreBox-title">
                                {this.props.data.data[0].floorTitle.floorName}
                            </span>
                            <span className="recommend-floor-more">更多</span>
                        </p>
                        <div className="list-wrap">
                            {this.props.data.data[0].data.map(value => {
                                return (
                                    <div
                                        className="list-item"
                                        key={value.floorCellData.grabSku.skuId}
                                    >
                                        <div className="item-img">
                                            <img
                                                alt=""
                                                src={
                                                    value.floorCellData.grabSku
                                                        .imgUrl
                                                }
                                            />
                                            <div className="storeLogo">
                                                <img
                                                    src={
                                                        value.floorCellData
                                                            .grabSku.storeLogo
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="number-discount">
                                                秒杀{(value.floorCellData.grabSku
                                                    .realTimePrice /
                                                    value.floorCellData.grabSku
                                                        .basicPrice * 10).toFixed(2)}折
                                            </div>
                                        </div>
                                        <div className="item-title">
                                            {
                                                value.floorCellData.grabSku
                                                    .skuName
                                            }
                                        </div>
                                        <div className="item-footer">
                                            <div className="item-price">
                                                <div>
                                                    ¥
                                                    {
                                                        value.floorCellData
                                                            .grabSku
                                                            .realTimePrice
                                                    }
                                                </div>
                                                <div>
                                                    ¥
                                                    {
                                                        value.floorCellData
                                                            .grabSku.basicPrice
                                                    }
                                                </div>
                                            </div>
                                            <div className="item-footer-img">
                                                <img
                                                    alt=""
                                                    src="//static-o2o.360buyimg.com/daojia/react/images/seckillQiang.3882994a.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </SaleWrap>
        )
    }
}
