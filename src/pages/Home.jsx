import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import TableBar from '_c/TableBar'
import Faxian from '@/pages/home/faxian/Faxian'
import ShopCartList from '@/pages/home/shopCartList/ShopCartList'
import OrderList from '@/pages/home/orderlist/OrderList'
import Index from '@/pages/home/index/Index'
import { Provider } from 'react-redux'
import { indexStore, faxianStore } from '@/redux/store'
export default class Layout extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route
                        path="/index"
                        render={() => {
                            return (
                                <Provider store={indexStore}>
                                    <Index></Index>
                                </Provider>
                            )
                        }}
                    />
                    <Route
                        path="/faxian"
                        render={() => {
                            return (
                                <Provider store={faxianStore}>
                                    <Faxian></Faxian>
                                </Provider>
                            )
                        }}
                    />
                    <Route path="/shopCartList" component={ShopCartList} />
                    <Route path="/orderlist" component={OrderList} />
                    <Redirect exact from="/" to="/index"></Redirect>
                </Switch>
                <TableBar></TableBar>
            </>
        )
    }
}
