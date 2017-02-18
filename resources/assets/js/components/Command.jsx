import React, { Component } from 'react';

class Command extends Component {
    render() {
        return (
        	<article className="command">
        		<span className="indicator">{this.props.command.letter}</span>
        		<p className="query">{this.props.command.command}</p>
        		<span className="result">{this.props.command.response}</span>
        	</article>
        );
    }
}

export default Command;
