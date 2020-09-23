import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div style={{ paddingBottom: '10px', background: '#fff' }}>
                <div className="css-1dbjc4n">
                    <div
                        className="css-1dbjc4n r-1pp923h r-1moyyf3 r-qwd59z r-1udh08x"
                        style={{ background: '#fff' }}
                    >
                        <div
                            id="floorId410667"
                            className="index-zone-wrap"
                            style={
                                this.props.data.data[0].borderImg
                                    ? {
                                          background: `url(${this.props.data.data[0].borderImg})`,
                                          backgroundColor: '#fff',
                                          backgroundSize: 'cover',
                                          backgroundRepeat: ' no-repeat',
                                          backgroundPosition: '0 0'
                                      }
                                    : { background: '#fff' }
                            }
                        >
                            <div
                                className="scorll-box-hidden"
                                style={{ height: '160px' }}
                            >
                                <div
                                    className="scroll-box"
                                    style={{ width: '100vw', height: '170px' }}
                                >
                                    <div>
                                        <div
                                            className="ballTpl3box"
                                            style={{ width: '140vw' }}
                                        >
                                            {this.props.data.data[0].data.map(
                                                (value, index) => {
                                                    return (
                                                        <div
                                                            key={
                                                                value
                                                                    .floorCellData
                                                                    .index
                                                            }
                                                            className="index-zone-ball3-box showMta vanishingIndex1"
                                                        >
                                                            <div
                                                            
                                                                className="ball1-box-navball"
                                                            >
                                                                <img
                                                                    alt=""
                                                                    className="index-zone-ball-pic"
                                                                    src={
                                                                        value
                                                                            .floorCellData
                                                                            .imgUrl
                                                                    }
                                                                />
                                                                <span className="ballTpl3-title">
                                                                    {
                                                                        value
                                                                            .floorCellData
                                                                            .title
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ballScrollWrap">
                                <div className="ballScrollBar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.data.data.length > 1 ? (
                    <div
                        id="floorId410663"
                        className="toutiao-floor-wrap"
                        style={{ paddingLeft: '10px' }}
                    >
                        <div className="toutiao-content">
                            <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010"
                                style={{
                                    display: 'inline-block',
                                    height: '19px',
                                    left: '10px',
                                    width: '40px'
                                }}
                            >
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"></div>
                                <img
                                    style={{ width: '100%' }}
                                    alt=""
                                    draggable="false"
                                    /*src={this.props.data.data[1].frontImg}*/
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAmCAMAAABktOxDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTADDLQDDLQDFLADGJwDCLQDFKQDIJQDHJADELQDHJADFKgDEKgDGKADHJwDGKQDDLQDINwDBMQDGLQDMIQDKJADSIgDLLecLG8UAAAASdFJOUwD+7ibew0uv/hJgOXOVV8+HB9qodNoAAAKaSURBVEjH7ZbpsqMgEIVF2RcBEXn/N51mMRJDMrnz71bNSWVD81XTp7vJNP1WKQYyvl9amWFMfo/wopOXxx4PLLrrEqUUEiYvYusYaHAnJQ/OYwf0LqAQyvPUlh+gsKkhkB37sTdxcQeqEDgKECMoNV7BZaJ+BwTFPcZ4sOkOpBk03/ZqvwAW2WV6jTAFttyMa0Amxr7SUwpueI2Q6FWzEpijZV3Olef8N57fgYvUONUUQqyYaGoqDtO3lSc7vZgy6dBgCATvzZB7Gp5yeCm+AJc5uzwTRuaHu9s26w+bbC5nHeRlyxp2m2wOR0iLtvwA2XXx30TI6QgIATqqqGQz2q4YS+sMK1uzh9ZXUxTkjZcMwnPbcsdc1LT+3OXJwZ6zHdWT2WiyXUj6D0CvMXReVkBEwwWvjIVKLNavb8ZVJ7tzEGnfytASVDtjjJNKeC+yGX6BpaxB7dBqx15eynzIKp6ndJine90MMn/ZIm2dHGvhxMg7Jdc1JqUsQRpJt6D8e2DD8vgIMMfoJla6DhVtd2ExGNdy7aSBBUx3flcFiE7kWdcfgM9aLMTII+vLPrU5fYaIfgCU815yaM3lHptPoVLY0COXrPh83sXK43BKPYhiOaVMDjGQ8lmpBa584EG18iPnL+ZNQ2lfMaoy9vNvCcQYSE4NHGf2/XwVCzU2HpHvPO6c8BvR5S7B+dcmbRXoCXRfcOM6NMxyOPZijm3f8TrpRlSdLamU8wM4yfeWmNYgGXjMJt9TiOEkChwQD/IZKHAmrmNgaZMdgsRna9YYUyXm+YXQ8gycysHCRkBXW3m2hnZTtfRKJV4pBGDYUgWqPG220bmisWVG0+W+WkSWNn/rEeLyWgtLatAI6Mfmn3+eBn+rpv/6NfoDGIVD/dZE7nEAAAAASUVORK5CYII="
                                    className="css-9pa8cd"
                                />
                            </div>
                            <div
                                style={{
                                    display: 'inline-block',
                                    lineHeight: '20px'
                                }}
                            >
                                <div className=" toutiao-used-for-bind">
                                    <div
                                      
                                        className="toutiao-scroll-content"
                                    >
                                        <div className="css-1dbjc4n r-1pi2tsx">
                                            <div
                                                dir="auto"
                                                className="css-901oao css-bfa6kz r-1niwhzg r-1khnkhu r-1b43r93"
                                            >
                                                <span
                                                    dir="auto"
                                                    className="css-901oao css-16my406 css-bfa6kz r-1niwhzg r-1khnkhu r-1b43r93"
                                                    style={{
                                                        fontFamily:
                                                            'PingFangSC-Regular',
                                                        fontWeight: 'bold',
                                                        marginRight: '4px',
                                                        textOverflow: 'clip',
                                                        fontSize: '14px',
                                                        color: '#000'
                                                    }}
                                                >
                                                    {
                                                        this.props.data.data[1]
                                                            .data[0]
                                                            .floorCellData.title
                                                    }
                                                </span>
                                                <span
                                                    dir="auto"
                                                    className="css-901oao css-16my406 css-bfa6kz r-1niwhzg r-1b43r93"
                                                    style={{
                                                        fontFamily:
                                                            'PingFangSC-Regular',
                                                        marginRight: '4px',
                                                        textOverflow: 'clip',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    {
                                                        this.props.data.data[1]
                                                            .data[0]
                                                            .floorCellData.words
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        )
    }
}
