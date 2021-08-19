import React, { Component } from 'react'

export class Game extends Component {
    constructor(props){
        super(props);
        this.state ={
            num1 : 1,
            num2 : 1,
            score : 0,
            response : "",
            incorrect : false
        }
    }

    render() {
        if (this.state.score >=5){
            return this.renderWin();
        }
        else{
            return this.renderProblem();
        }
    }

    renderProblem() {
        return (
            <div>
                <h1 className={this.state.incorrect ? 'incorrect' : ''}>{this.state.num1} + {this.state.num2}</h1>
                <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
                <h2>Current Guess is {this.state.response}</h2>
                <div>
                    score:{this.state.score}

                </div>
            </div>
        )
    }

    renderWin(){
        return(
            <div>
                <h1>Congratulations !! You won the game</h1>
            </div>
        );
    }

    updateResponse =(event) =>{
        this.setState({
            response : event.target.value
        });
    }

    inputKeyPress = (event) =>{
        if(event.key === "Enter") {
            const answer =  parseInt(this.state.response);
            if(answer === this.state.num1 + this.state.num2){
                //Answer is right
                this.setState(state=>({
                        score: state.score +1,

                        num1 : Math.ceil(Math.random() * 10),
                        num2 : Math.ceil(Math.random() * 10),

                        response : "",
                        incorrect : false
                }));
            } 
            else{
                //Answer is wrong
                this.setState({
                    response : "",
                    incorrect : true
                })
            }
        }
    }
}

export default Game
