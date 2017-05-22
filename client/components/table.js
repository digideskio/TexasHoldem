import React, {Component} from 'react';
import Board from './board';
import Hand from './hand';
import Options from './options';
import apple from '../app-client';

function actionMethod(action, callback) {
	return action;
}

class Table extends Component{
	constructor(props) {
		super(props);
	    this.state = {
	      card1: "./images/cards-png/b2fv.png",
	      card2: "./images/cards-png/b2fv.png",
	      user: "",
      	  burn1: "",
		  burn2: "",
		  burn3: "",
		  flop1: "",
		  flop2: "",
		  flop3: "",
		  turn: "",
		  river: "",
		  action: "waiting",
		  officialAction: 'waiting',
		  shouldHide: true,
		  message: ""
	    };
	}
	handleUser(user) {
		this.setState({
			card1: `./images/cards-png/${user.hand[0].img}`,
			card2: `./images/cards-png/${user.hand[1].img}`
		})
	}
	handleFlop(board){
		this.setState({
			burn1: "./images/cards-png/b2fv.png",
			flop1: `./images/cards-png/${board[0].img}`,
			flop2: `./images/cards-png/${board[1].img}`,
			flop3: `./images/cards-png/${board[2].img}`
		})
	}
	handleTurn(board){
		this.setState({
			burn2: "./images/cards-png/b2fv.png",
			turn: `./images/cards-png/${board[3].img}` 
		})
	}
	handleRiver(board){
		this.setState({
			burn3: "./images/cards-png/b2fv.png",
			river: `./images/cards-png/${board[4].img}` 
		})
	}
	setOptions(data) {
		this.setState({
			shouldHide: false,
			message: `Highest bet is ${data.highestBet}. Pot size is ${Math.floor(data.pot * 100) / 100}.`
		})
	}
	action(e) {
		e.preventDefault();
		this.setState({
			officialAction: this.state.action
		})
	}
	actionChange(e) {
		this.setState({
			action: e.target.value
		})
	}
	returnAction() {
		var action = this.state.officialAction;
		if(action != 'waiting'){
			this.setState({
				officialAction: 'waiting',
				shouldHide: true
			})
		}
		return action
	}
	render() {
		return (
			<div>
				<Hand card1={this.state.card1} card2={this.state.card2} />
				<Board burn1={this.state.burn1} burn2={this.state.burn2} burn3={this.state.burn3} flop1={this.state.flop1} flop2={this.state.flop2} flop3={this.state.flop3} turn={this.state.turn} river={this.state.river}/>
				<Options message={this.state.message} shouldHide={this.state.shouldHide} action={this.action.bind(this)} change={this.actionChange.bind(this)}/>
			</div>
		)
	}
}

module.exports = { Table, actionMethod }

