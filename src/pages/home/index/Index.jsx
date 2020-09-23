import React, { Component } from 'react'

import { connect } from 'react-redux'

import Loading from '_c/Loading'
import Header from './Header'
import Banner from './Banner'
import Menu from './Menu'
import Welfare from './Welfare'
import Slide from '_c/Slide'
import DisCount from './Discount'
import Sale from './Sale'
import NearShopHeader from './NearShopHeader'
import NearShopList from './NearShopList'
import FixedWindow from './FixedWindow'

import { NearShopWrap } from './styledIndex'

const mapState = state => ({
    topData: state.topData,
    botData: state.botData
})

const mapDistapch = distapch => ({
    getIndexData() {
        distapch({
            type: 'sagaGetIndexData'
        })
    }
})

@connect(mapState, mapDistapch)
class Index extends Component {
    async componentDidMount() {
        this.props.getIndexData()
    }

    render() {
        return (
            <>
                {Object.keys(this.props.topData).length > 0 ? (
                    <div className="section indexSection">
                        <Header
                            data={this.props.topData.config.searchConfig}
                        ></Header>
                        <Banner data={this.props.topData.data[0]}></Banner>
                        <Menu data={this.props.topData.data[1]}></Menu>
                        <Welfare data={this.props.topData.data[2]}></Welfare>
                        <div
                            style={{
                                height: '100px',
                                margin: '10px 10px 0',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <Slide
                                data={this.props.topData.data[3].data[0].data}
                            ></Slide>
                        </div>
                        <DisCount data={this.props.topData.data[4]}></DisCount>
                        <Sale data={this.props.topData.data[5]}></Sale>
                        <div
                            style={{
                                height: '100px',
                                margin: '10px 10px 0',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <Slide
                                data={this.props.topData.data[6].data[0].data}
                            ></Slide>
                        </div>
                        <NearShopWrap className="floorBox floor-storelist-box">
                            <NearShopHeader
                                data={this.props.botData}
                            ></NearShopHeader>
                            <NearShopList
                                data={this.props.botData.data.data}
                            ></NearShopList>
                        </NearShopWrap>
                        {this.props.topData.config.sideFloor ? (
                            <FixedWindow
                                data={this.props.topData.config.sideFloor}
                            ></FixedWindow>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    <Loading></Loading>
                )}
            </>
        )
    }
}

export default Index
