import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count :0
        };
    }
    render(){
        return(
            <div>
                <h1>
                {this.state.count}
                </h1>
                <button onClick={this.increment} > Add</button>
                <button onClick={this.decrement} > Subtract</button>
            </div>
        );
    }

    increment = () => {
        //you cann't direct increment the state

        // it is more secure as compared to old one
        //count:this.state.count+1
        
        this.setState(state=>({
            count : state.count+1
        }));
    }

    decrement = () =>{
        this.setState(state=>({
            count : state.count-1
        }));
    }
}

export default Counter;
