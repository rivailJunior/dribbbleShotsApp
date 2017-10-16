import React, { Component } from 'react';
export default class Page2 extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.token = $.jribbble.setToken('1d5bb4e38bbcec26a09d437ae9b95023d76ea6ccf9c0630fbc41f4fe0cb44397');
    }

    makeRequest(){
        return new Promise((success, reject) => {
            $.jribbble.shots('teams').then(function(shots) {
                console.log('shots', shots);
            });
        });
    }

    handleClick(){
        this.makeRequest().then(shots=>{
            console.log('shots', shots);
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Make Request</button>
            </div>

        )
    }
}