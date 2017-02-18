import React, { Component } from 'react';

class FormMatrix extends Component {
	
	constructor(props) {
	    super(props)
	}

    render() {
        return (
            <form name="create-matrix">
				<div className="form-group">
					<label htmlFor="test">Numero de Tests</label>
					<input type="number" className="form-control" id="test" placeholder="Cuantos test quiere realizar" 
							name="t"
							value={this.props.matriz.t}
            				onChange={this.props.onChange} disabled={(!this.props.activate && this.props.Ntest>0)}/>
				</div>
				<div className="form-group">
					<label htmlFor="N">N</label>
					<input type="number" className="form-control" id="N" placeholder="Asigne el valor de N" 
							name="n" 
							value={this.props.matriz.n}
            				onChange={this.props.onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="M">M</label>
					<input type="number" className="form-control" id="M" placeholder="Asigne el valor de M" 
							name="m"
							value={this.props.matriz.m}
            				onChange={this.props.onChange} />
				</div>
				<button type="button" className="btn btn-primary" onClick={this.props.onClick} >Crear</button>
            </form>
        );
    }
}

export default FormMatrix;
