import React, { Component } from 'react'

import Search from './Search'
import NeedLogin from './NeedLogin'
export default class OrderList extends Component {
    render() {
        return (
            <div className='order-list'>
                <Search></Search>
                <NeedLogin></NeedLogin>
            </div>
        )
    }
}
