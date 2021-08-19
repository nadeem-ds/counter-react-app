import React, { Component } from 'react'

export class Nadeem extends Component {
    
    render() {
        return (
            <div>
                <h1>Nadeem {this.props.name}</h1>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }

    handleClick= () => {
        alert('Nadeem ' + this.props.name)
    }
}

export default Nadeem
