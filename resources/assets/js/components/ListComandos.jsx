import React, { Component } from 'react';

class ListComandos extends Component {
    render() {
        return (
			<div className="panel panel-default list-command">
                <div className="panel-heading">Log Comandos</div>

                <div className="panel-body">
                	<article className="command">
                		<span className="indicator">Q</span>
                		<p className="query">QUERY 2 2 2 3 3 3 34</p>
                		<span className="result">56</span>
                	</article>
                	<article className="command">
                		<span className="indicator">U</span>
                		<p className="query">UPDATE 3 3 3 45</p>
                		<span className="result">Ok</span>
                	</article>
                </div>
            </div>
        );
    }
}

export default ListComandos;
