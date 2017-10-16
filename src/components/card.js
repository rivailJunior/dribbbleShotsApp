import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Card extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={this.props.displayClass}>
                <div className="card">
                    <div className="card-header card-chart">
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className="card-content">
                        <h4 className="title text-nowrap" style={{overflow: 'hidden', textOverflow:'ellipsis'}}>{this.props.title}</h4>
                    </div>
                    <div className="card-footer">
                        <div className="stats">
                            <i className="material-icons" style={{verticalAlign:'inherit'}}>access_time</i>
                            <span className="title text-nowrap" style={{overflow: 'hidden', textOverflow:'ellipsis'}}>
                               {moment(this.props.data).format('MMMM Do YYYY').toString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    title: PropTypes.string,
    textContainer:PropTypes.string,
    data: PropTypes.string,
    displayClass: PropTypes.string,
    comments: PropTypes.number,
    visibility: PropTypes.number,
    likes: PropTypes.number
};

