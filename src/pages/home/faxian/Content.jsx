import React, { Component } from "react";
import { connect } from "react-redux";

import FollowContent from "./follow/Content";
import RecipesContent from './recipes/Content'
import RecommentContent from './recommend/Content'
import FashionContent from './fashion/Content'
import LifeContent from './life/Content'

import Loading from '_c/Loading'

const mapStateToProps = state => state;
@connect(mapStateToProps)
class Countent extends Component {
    state = {
        contents: ["follow", "recipes", "recommend", "fashion", "life"]
    };

    getNowContent (value){
        switch (value) {
            case 'follow':
                return <FollowContent data={this.props.data}></FollowContent>      
            case 'recipes':
                return <RecipesContent data={this.props.data}></RecipesContent> 
            case 'recommend':
                return <RecommentContent data={this.props.data}></RecommentContent>      
            case 'fashion':
                return <FashionContent data={this.props.data}></FashionContent>      
            case 'life':
                return <LifeContent data={this.props.data}></LifeContent>      
            default:
                return <Loading></Loading>
        }
    }
    render() {
        return (
            <div className="tab-content">
                {this.state.contents.map((value, index) => {
                    return (
                        <div key={value + index} className={`content-item ${this.props.nowNav === value ? 'on' : ''}`}>
                            {this.props.nowNav === value ? this.getNowContent(value) : ''}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Countent;
