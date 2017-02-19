import React, { Component } from 'react';
import FormMatrix from './FormMatrix';

class Matrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matriz: {
                t: '',
                n: '',
                m: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const matriz = this.state.matriz;
        matriz[field] = event.target.value;
        return this.setState({matriz: matriz});
    }

    handleSubmit(event) {
        const _this = this;
        event.preventDefault();
        window.axios.post('./create', {
                    t: this.state.matriz.t,
                    n: this.state.matriz.n,
                    m: this.state.matriz.m, 
                })
                  .then(function (response) {
                    if (response.data.ok) {
                        _this.props.changeState('active',true);
                        _this.props.changeState('cubeM',_this.state.matriz.m); 
                        _this.props.changeState('cubeT',_this.state.matriz.t);                      
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    }

    render() {
        const element = (
            <div className="panel panel-default ">
                <div className="panel-heading">Crear Matrix</div>

                <div className="panel-body">
                    <FormMatrix matriz={this.state.matriz} onClick={this.handleSubmit} onChange={this.handleChange} activate={this.props.activate} Ntest={this.props.Ntest}/>
                </div>
            </div>
        )
        return  this.props.activate ? null : element ;
    }
}

export default Matrix;
