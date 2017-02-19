import React, { Component } from 'react';

class FormComando extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
            comando: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
	}

	handleChange(event) {
		this.setState({
			comando: event.target.value,
		})
	}

	handleSubmit(event) {
		const _this = this;
		event.preventDefault();
		const comandos = this.state.comando.split(" ");

        switch (comandos[0].toUpperCase()) {
            case "UPDATE":
                if (comandos.length !== 5) {
                    return alert("Comando UPDATE mal formado");
                }

                window.axios.post('./update', {
                    x: comandos[1],
                    y: comandos[2],
                    z: comandos[3],
                    w: comandos[4]
                })
                  .then(function (response) {
                    _this.props.updateCommand({command: _this.state.comando, letter: 'U', response: 'OK'})
                    _this.setState({
						comando: '',
					});
					_this.props.updateOperation();
                  })
                  .catch(function (error) {
                    console.log(error);
                    //processErrorMessages(data);
                  });

                break;
            case "QUERY":

                if (comandos.length !== 7) {
                    return alert("Comando QUERY mal formado");
                }

                window.axios.post('./query', {
                    x1: comandos[1],
                    y1: comandos[2],
                    z1: comandos[3],
                    x2: comandos[4],
                    y2: comandos[5],
                    z2: comandos[6]
                })
                  .then(function (response) {
                    _this.props.updateCommand({command: _this.state.comando, letter: 'Q', response: response.data.result})
                    _this.setState({
						comando: '',
					});
					_this.props.updateOperation();
                  })
                  .catch(function (error) {
                    console.log(error);
                    //processErrorMessages(data);
                  });
                break;

            default:
                return alert("El comando " + _this.state.comando + " no es valido");

                break;
        }
	}

	handleReset() {
		this.props.changeState('active',false);
		this.props.changeState('operaciones',0);
		this.props.changeState('comandos',[]);
	}

    render() {
    	const element = (
    		<div>
	    		<div className="input-group">
					<input type="text" className="form-control" placeholder="Ejecutar comando..." 
						name="comando"
						onChange={this.handleChange}
						value={this.state.comando}/>
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={this.handleSubmit} disabled={(this.props.operations >= this.props.cubeM)}>&#10095;</button>
					</span>
				</div>
				{
					(this.props.operations >= this.props.cubeM) ? (<button className="btn btn-warning" onClick={this.handleReset}>Reset</button>) : null
				}
			</div>
			)
        return  this.props.activate ? element : null ;
    }
}

export default FormComando;
