import React, { Component } from 'react';
import FormMatrix from './FormMatrix';

class Matrix extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Crear Matrix</div>

                <div className="panel-body">
                    <FormMatrix />
                </div>
            </div>
        );
    }
}

export default Matrix;
