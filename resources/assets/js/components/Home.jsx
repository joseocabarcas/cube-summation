import React, { Component } from 'react';
import Matrix from './Matrix';
import FormComando from './FormComando';
import ListComandos from './ListComandos';

class Home extends Component {
    render() {
        return (
            <div className="container">
		        <div className="row">
		            <div className="col-md-8 col-md-offset-2">
		                <Matrix />
						<FormComando />
						<ListComandos />
		            </div>
		        </div>
		    </div>
        );
    }
}

export default Home;
