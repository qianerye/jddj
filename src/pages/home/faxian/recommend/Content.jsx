import React, { Component } from 'react'

import List from './List'

export default class Content extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                <List></List> 
            </div>
        )
    }
}
