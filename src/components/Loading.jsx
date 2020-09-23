import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginLeft : '-78px',
                    marginTop : '-80px'

                }}
            >
                <img
                    src="https://static-o2o.360buyimg.com/daojia/react/images/newLoading.5f6e11b8.gif"
                    alt=""
                />
            </div>
        )
    }
}
