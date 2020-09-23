import React, { Component } from 'react'

import Search from './Search'
import Menu from './Menu'
import HotRecipes from './HotRecipes'
export default class Content extends Component {
    render() {
        console.log(this.props.data)
        return (
            <div>
                <Search></Search> 
                <Menu></Menu>  
                <HotRecipes></HotRecipes>
            </div>
        )
    }
}
