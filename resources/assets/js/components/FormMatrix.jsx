import React, { Component } from 'react';

class FormMatrix extends Component {
    render() {
        return (
            <form name="create-matrix">
				<div className="form-group">
					<label htmlFor="test">Numero de Tests</label>
					<input type="number" className="form-control" id="test" placeholder="Cuantos test quiere realizar" />
				</div>
				<div className="form-group">
					<label htmlFor="N">N</label>
					<input type="number" className="form-control" id="N" placeholder="Asigne el valor de N" />
				</div>
				<div className="form-group">
					<label htmlFor="M">M</label>
					<input type="number" className="form-control" id="M" placeholder="Asigne el valor de M" />
				</div>
				<button type="button" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}

export default FormMatrix;
