import React, { Component } from 'react';

import { Carousel } from 'antd-mobile';
export default class Slide extends Component {
    render() {
        return (
            <Carousel autoplay={true} infinite>
                {this.props.data.map((value, index) => (
                    <img
                        key={index}
                        src={
                            value.floorCellData
                                ? value.floorCellData.imgUrl
                                : value.imgUrl
                        }
                        alt=""
                        style={{
                            width: '100%',
                            verticalAlign: 'top',
                            touchAction: 'none'
                        }}
                    />
                ))}
            </Carousel>
        );
    }
}
