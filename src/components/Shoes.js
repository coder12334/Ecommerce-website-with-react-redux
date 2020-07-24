import React, { Component } from 'react'

export default class Shoes extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.location.state.category}</h1>
            </div>
        )
    }
}
