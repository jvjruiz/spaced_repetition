import React, { Component } from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onClick.bind(this)}>Count Up!!</button>
            </div>
        )
    }
}

export default Counter;