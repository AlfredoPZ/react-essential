import React, { Component } from 'react'

export default class CounterClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    decrement = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
