import React, { Component } from "react";
import { WelfareWarp } from "./styledIndex";

export default class Welfare extends Component {
    render() {
        return (
            <WelfareWarp className="css-1dbjc4n">
                <div className="css-1dbjc4n">
                    <div
                        id="floorId406831"
                        className="floorBox marketing-floor-banner"
                    >
                        <div>
                            <div className="floor-banner-link-box vanishingIndexundefined showMta">
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010">
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"></div>
                                    <img
                                        alt=""
                                        draggable="false"
                                        src={
                                            this.props.data.data[0].data[0]
                                                .floorCellData.imgUrl
                                        }
                                        className="css-9pa8cd"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </WelfareWarp>
        );
    }
}
