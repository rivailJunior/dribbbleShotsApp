import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-success" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Dribbble </a>
                    </div>
                </div>
            </nav>
        );
    }
}