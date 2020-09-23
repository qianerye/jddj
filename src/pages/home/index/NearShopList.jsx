import React, { Component } from 'react'

import { Icon } from 'antd-mobile'
export default class NearShopList extends Component {
    state = {
        starts: [1, 2, 3, 4, 5]
    }

    render() {
        return (
            <div className="scroll-box scrollLoad-box">
                <>
                    {this.props.data.map(value => {
                        return (
                            <div
                                key={value.floorCellData.storeId}
                                className="search-product-item-wrap showMta storeitem-border-b "
                            >
                                <div className="store-item-container ">
                                    <div
                                        className="shop-logo"
                                        style={{ width: '66px' }}
                                    >
                                        <div className="css-1dbjc4n r-z2wwpe r-1mlwlqe r-1udh08x r-417010 shop-logo-box">
                                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"></div>
                                            <img
                                                alt=""
                                                draggable="false"
                                                src={value.floorCellData.imgUrl}
                                                className="css-9pa8cd"
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="store-item-right-wrap">
                                        <div className="store-name-box">
                                            <div className="store-title">
                                                {value.floorCellData.storeName}
                                            </div>
                                            {value.floorCellData.tagList
                                                .length > 0 ? (
                                                <div className="honor-list">
                                                    <img
                                                        alt=""
                                                        src={
                                                            value.floorCellData
                                                                .tagList[0]
                                                                .tagLogoUrl
                                                        }
                                                    />
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        <div className="star-section-wrap">
                                            {value.floorCellData.storeStar >
                                            0 ? (
                                                <>
                                                    <div
                                                        className="star-container"
                                                        style={{
                                                            position: 'relative'
                                                        }}
                                                    >
                                                        {this.state.starts.map(
                                                            item => {
                                                                return (
                                                                    <div
                                                                        key={
                                                                            item
                                                                        }
                                                                        className="star-wrap"
                                                                    >
                                                                        <img
                                                                            style={
                                                                                parseInt(
                                                                                    value
                                                                                        .floorCellData
                                                                                        .storeStar
                                                                                ) >=
                                                                                item
                                                                                    ? {}
                                                                                    : {
                                                                                          position:
                                                                                              'absolute',
                                                                                          left: `
                                                                                            ${parseInt(
                                                                                                ((value
                                                                                                    .floorCellData
                                                                                                    .storeStar *
                                                                                                    10) /
                                                                                                    2) %
                                                                                                    10
                                                                                            ) *
                                                                                                10 -
                                                                                                40}px
                                                                                        `
                                                                                      }
                                                                            }
                                                                            alt=""
                                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAATCAMAAADBCCHQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACNUExURUdwTNjY2P+0KdjY2Pm2SeHbxNjY2NjY2NjY2P+3K//JNtbW1v+vLv+oFf+VFNjY2NbW1tfX1//ENP/KOP+uJf/HN/+iHf+eHNfX19fX1/+9Jf/Qa/+6FP/gnNjY2P+kIv+WGP/JOf/JNdjY2NjY2P+8L/+1Kv+kHv+qIv+fHP/DM/+vJv+7IP+aGf+QEhWBieEAAAAkdFJOUwCyE0oHC4EhnyGxRUezo8gV8INbf++YxTZaM0ZQgHBwOp/NXUgFLq0AAAF5SURBVDjLvdTZcoMgFAbgo6JI4pbd7El7jEui7/94NWoRjjMdetFy5zf8v6AowD8NsRIm9MkpcSOC1WZlQos9pb0RsVk1YwaEFiXLhOBUVdnJgBAdnRw0IQirLAsNCNHSycKfiYEtDsfzK8sexfl4EDYwlbx5yl1lVhvVCVEll6dzTyUQ99nH5vXuejzyvNiFW6ES4iK2fC6py6qEOBL3rXiBqBLY96p9zu+q57Mo8ryMbJW6mX4i6TssSda1lPioDz9pd7DMxvqyXING3VYVGoIjya6OPK3e61/Bclx8vSZEZ02CpMub1gOsn6R+JDprEqRd3rQeRN9e1rWghMg16pIqDWWSuOwf/xFBv/i6bgJKypcS9PtBnYYyR/24CMG1X3zdNFdKiBeNuqRKQ5mki+yXxLZtMAqipmm2jFB7xlyV5u8jqBL6GrndhUZg78rwxoDdwmZnE7IwTjRyU51SV6MkRosQiCjob8WCSBByHZ//hrjvUPrT8QWt3GBv5Zq9iAAAAABJRU5ErkJggg=="
                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        )}
                                                    </div>
                                                    <span className="star-label">
                                                        {
                                                            value.floorCellData
                                                                .scoreAvg
                                                        }
                                                    </span>
                                                </>
                                            ) : (
                                                <div className="no-score">
                                                    暂无评价
                                                </div>
                                            )}

                                            <div className="store-monthsale oneline-overflow-ellipsis">
                                                {value.floorCellData.monthSale}
                                            </div>
                                            <div className="delivery-distance">
                                                <span className="delivery-first oneline-overflow-ellipsis">
                                                    {
                                                        value.floorCellData
                                                            .deliveryFirst
                                                    }
                                                </span>
                                                <span className="distance-time-sep-line"></span>
                                                <span className="delivery-first oneline-overflow-ellipsis">
                                                    {
                                                        value.floorCellData
                                                            .distance
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        <div className="index-store-freight-box">
                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz flex">
                                                <div
                                                    dir="auto"
                                                    className="css-901oao css-bfa6kz r-1niwhzg"
                                                    style={{
                                                        color:
                                                            'rgb(102, 102, 102)',
                                                        fontFamily:
                                                            'PingFangSC-Regular',
                                                        fontSize: '11px'
                                                    }}
                                                >
                                                    {
                                                        value.floorCellData.freightWords.split(
                                                            '|'
                                                        )[0]
                                                    }{' '}
                                                </div>
                                                <div
                                                    dir="auto"
                                                    className="css-901oao css-bfa6kz r-1niwhzg"
                                                    style={{
                                                        color:
                                                            'rgb(245, 245, 245)',
                                                        fontFamily:
                                                            'PingFangSC-Regular',
                                                        fontSize: '11px',
                                                        marginLeft: '4px',
                                                        marginright: '4px'
                                                    }}
                                                >
                                                    |
                                                </div>
                                                <div
                                                    dir="auto"
                                                    className="css-901oao css-bfa6kz r-1niwhzg"
                                                    style={{
                                                        color:
                                                            'rgb(102, 102, 102)',
                                                        fontFamily:
                                                            'PingFangSC-Regular',
                                                        fontSize: '11px'
                                                    }}
                                                >
                                                    {' '}
                                                    {
                                                        value.floorCellData.freightWords.split(
                                                            '|'
                                                        )[1]
                                                    }
                                                </div>
                                            </div>
                                            <div
                                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-dmthdj r-1dpl46z r-kicko2 r-10ncb7d r-1pexk7n r-1777fci r-1udh08x r-mzo9nz"
                                                style={{}}
                                            >
                                                {value.floorCellData
                                                    .regularFlag === 2 ? (
                                                    <div
                                                        className="css-901oao css-bfa6kz r-1niwhzg"
                                                        style={{
                                                            border:
                                                                '1px solid rgb(153 , 153 ,153)',
                                                            color:
                                                                'rgb(153, 153, 153)',
                                                            fontFamily:
                                                                'PingFangSC-Regular',
                                                            fontSize: '10px',
                                                            borderRadius: '4px'
                                                        }}
                                                    >
                                                        商家自送
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="css-901oao css-bfa6kz r-1niwhzg"
                                                        style={{
                                                            border:
                                                                '1px solid rgb(76, 156, 255) ',
                                                            borderRadius: '4px',
                                                            color:
                                                                'rgb(76, 156, 255)',
                                                            fontFamily:
                                                                'PingFangSC-Regular',
                                                            fontSize: '10px'
                                                        }}
                                                    >
                                                        达达专送
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <ul className="index-store-list-fujia-bottom">
                                            <div >
                                                <div className="store-gian-newCoupons-box">
                                                    <div className="arrow-wrap">
                                                        <Icon
                                                            type="down"
                                                            size="xxs"
                                                        />
                                                    </div>
                                                    <div className="store-gain-coupons-box ">
                                                        <div className="store-gain-show-box">
                                                            {value.floorCellData.coupons.map(
                                                                value => {
                                                                    return (
                                                                        <span
                                                                            key={
                                                                                value.activityCode
                                                                            }
                                                                            className="store-gian-coupons-flag"
                                                                        >
                                                                            {
                                                                                value.words
                                                                            }
                                                                        </span>
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                    {value.floorCellData
                                                        .tags[0] ? (
                                                        <li className="index-store-fujia-item ">
                                                            <div className="css-1dbjc4n r-1awozwy r-dmthdj r-1dpl46z r-kicko2 r-10ncb7d r-1pexk7n r-1777fci r-1udh08x r-mzo9nz">
                                                                <div
                                                                    dir="auto"
                                                                    className="css-901oao css-bfa6kz r-1niwhzg"
                                                                    style={{
                                                                        background: `${value.floorCellData.tags[0].endColorCode}`,
                                                                        color:
                                                                            '#fff',
                                                                        padding:
                                                                            '0 3px',
                                                                        marginRight:
                                                                            '3px',
                                                                        borderRadius:
                                                                            '2px'
                                                                    }}
                                                                >
                                                                    {
                                                                        value
                                                                            .floorCellData
                                                                            .tags[0]
                                                                            .iconText
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div
                                                                dir="auto"
                                                                className="css-901oao css-bfa6kz r-1niwhzg"
                                                            >
                                                                {
                                                                    value
                                                                        .floorCellData
                                                                        .tags[0]
                                                                        .words
                                                                }
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        ''
                                                    )}
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            </div>
        )
    }
}
