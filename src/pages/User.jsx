import React, { Component } from 'react';

import { connect } from 'react-redux';
import { UserWrap } from './user/userStyled';

import TableBar from '_c/TableBar';
import Header from './user/Header';
import WalletList from './user/WalletList';
import MineList from './user/MineList';
import Slide from '_c/Slide';

const mapState = state => ({
    data: state.data
});

const mapDispatch = dispatch => ({
    getData() {
        dispatch({
            type: 'sagaGetUserData'
        });
    }
});

@connect(mapState, mapDispatch)
class User extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <UserWrap className="taro_router" style={{ minHeight: '100%' }}>
                <div className="taro_page" style={{ minHeight: '100%' }}>
                    <div className="index-module__user-page-wrap___i-v4v">
                        {Object.keys(this.props.data).length > 0 ? (
                            <div className="section">
                                <Header></Header>
                                <WalletList></WalletList>
                                <div style={{minHeight : '75px'}}>                
                                    <Slide
                                        data={
                                            this.props.data.result
                                                .channelFloorList[0]
                                                .bannerFloorItemList
                                        }
                                    ></Slide>
                                </div>
                                <MineList
                                    data={this.props.data.result.userModuleList}
                                ></MineList>
                            </div>
                        ) : (
                            ''
                        )}
                        <TableBar></TableBar>
                    </div>
                </div>
            </UserWrap>
        );
    }
}

export default User;
