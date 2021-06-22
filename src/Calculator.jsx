import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0
        }

    }
    firstNum = (e) => {
        this.setState({
            num1: e.target.value
        })    
    }

    secondNum = (e) => {
        this.setState({
            num2: e.target.value
        })
    }

    thirdNum = () => {
        this.setState({
            num3: parseFloat(this.state.num1) + parseFloat(this.state.num2)
        })
    }

    render() {

        return (
            <div className="container">
            <h1>Add with React!</h1>

        <div className="add">
            <input type="number" onChange={this.firstNum} />
            <span>+</span>
            <input type="number" onChange={this.secondNum}/>
            <button onClick={this.thirdNum}>=</button>
            <h3>Addition results go here!</h3>
            <p>{this.state.num3}</p>
        </div>
        </div>
        )
    }
}