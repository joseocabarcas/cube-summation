import React, { Component } from 'react';
import Command from './Command';

class ListComandos extends Component {
    render() {
        const element = (
			<div className="panel panel-default list-command">
                <div className="panel-heading">Log Comandos</div>

                <div className="panel-body">
                {
                	this.props.commands.map( (command, index) => {
                        return <Command command={command} key={index}/>
                    })
                }
                </div>
            </div>
        )
        return  this.props.activate ? element : null ;
    }
}

export default ListComandos;
