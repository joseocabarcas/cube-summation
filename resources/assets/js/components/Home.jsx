import React, { Component } from 'react';
import Matrix from './Matrix';
import FormComando from './FormComando';
import ListComandos from './ListComandos';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: false,
			operaciones: 0,
			comandos: [],
			Ntest: 0,
			cubeM: 0,
			cubeT: 0,
		}
		this.changeState = this.changeState.bind(this);
		this.updateCommand = this.updateCommand.bind(this);
		this.updateOperation = this.updateOperation.bind(this);
	}

	changeState(field, value) {
		this.setState({
			[field]: value
		})
	}

	updateCommand(command) {
		this.setState({ 
			comandos: this.state.comandos.concat([command])
		})
	}

	updateOperation() {
		this.setState({ 
			operaciones: this.state.operaciones + 1
		})
		
	    if (this.state.operaciones >= this.state.cubeM) {
	        this.state.Ntest += 1;
	    }

	    if (this.state.Ntest >= this.state.cubeT) {
	        this.state.Ntest = 0;
	    }
	}

    render() {
        return (
            <div className="container">
		        <div className="row">
		            <div className="col-md-8 col-md-offset-2">
		                <Matrix activate={this.state.active} changeState={this.changeState} Ntest={this.state.Ntest}/>
						<FormComando activate={this.state.active} changeState={this.changeState} 
									updateCommand={this.updateCommand} updateOperation={this.updateOperation}
									operations={this.state.operaciones}
									cubeM={this.state.cubeM}/>
						<ListComandos activate={this.state.active} changeState={this.changeState} commands={this.state.comandos}/>
		            </div>
		        </div>
		    </div>
        );
    }
}

export default Home;
