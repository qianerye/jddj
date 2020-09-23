import React, { Component } from 'react'

export default class FixedWindow extends Component {
    render() {
        return (
            <>
                <div
                    id="floorId404007"
                    className="index-red-pack  showMta"
                   
                    style={{ bottom: '182px' }}
                >
                    <img
                        className="index-red-pack-img"
                        alt=""
                        src={this.props.data[0].imgUrL}
                    />
                </div>
            </>
        )
    }
}
