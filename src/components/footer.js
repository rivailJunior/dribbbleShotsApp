import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return (
            <footer className="footer success" style={{borderTop: '2px solid #e7e7e7'}}>
                <div className="container">
                    <nav className="pull-right">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/rivail-santos-14373997/" target="_blank">
                                    <i className="material-icons">person_add</i>
                                    Rivail Santos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}