import React, { Component } from 'react';

class FormComando extends Component {
    render() {
        return (
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Ejecutar comando..." />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button">&#10095;</button>
				</span>
			</div>
        );
    }
}

export default FormComando;
