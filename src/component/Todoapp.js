import React, { Component } from 'react'

export class Todoapp extends Component {
    constructor(props){
        super(props);
        this.state={
            task : [],
            input : ""
        };
    }
    render() {
        return (
            <div>
                <h1>Tasks</h1>
                <ul>
                    {this.state.task.map((task , i)=>
                    <li key={i}>
                        {task}
                    </li>
                    )}
                </ul>
                <div>
                    <input onChange={this.handleChange} value={this.state.input}/>
                    <button  onClick = {this.addTask} >Add Task </button>
                </div>
            </div>
        )
    }

    handleChange = (event)=>{
        this.setState({
            input: event.target.value
        });
    }

    addTask = ()=>{
        this.setState(state => ({
            task:[...state.task, state.input]
        }));
    }
}

export default Todoapp
