import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import Card from './card';
import PageDetails from '../pages/pageDetails';
import DribbleApiUtils from '../utils/dribbbleRequestUtils';

class ListCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            shots: [],
            list: [],
            location: '',
            showMainContainer: true,
            displayClass: this.props.displayClass,
            per_page: 10,
            viewStyle: "col-md-4 col-sm-4 col-xs-6"
        };
        this.defaultViewStyle = "col-md-4 col-sm-4 col-xs-6";
        this.biggerViewStyle = "col-md-12 col-sm-12 col-xs-12";
        this.smallerViewStyle = "col-md-3 col-sm-4 col-xs-4";
        this.previousLocation = this.props;
        this.loadMoreShots = this.loadMoreShots.bind(this);
    }

    componentWillUpdate(nextProps) {
        const { location } = this.previousLocation;
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location
        }
    }

    showMainContainer() {
        this.setState({showMainContainer: !this.state.showMainContainer});
    }

    /**
     * setShots - set a list of shots to the state component
     * @param shots
     */
    setShots(shots) {
        this.setState({ shots: shots });
    }

    /**
     * getShots - return a list of shots
     */
    getShots(){
        DribbleApiUtils.getShots('debuts', {
            'sort': 'views',
            'timeframe': 'ever',
            'per_page': this.state.per_page,
        }).then(shots => {
            this.setShots(shots);
        });
    }

    componentDidMount() {
        this.getShots();
    }

    /**
     * loadMoreShots - it will load more 5 shots in the current list queue
     */
    loadMoreShots() {
        this.setState({per_page: this.state.per_page + 5}, () => {
            this.getShots();
        })
    }

    /**
     * buildUlComponent - create a list of card elements
     */
    buildUlComponent() {
        return (
            <div>
                <div className="row m-b-10">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-fab btn-fab-mini btn-round pull-right"
                                onClick={()=>this.setState({viewStyle: this.biggerViewStyle})}>
                            <i className="material-icons">view_agenda</i>
                        </button>
                        <button className="btn btn-success btn-fab btn-fab-mini btn-round pull-right"
                                onClick={()=>this.setState({viewStyle: this.defaultViewStyle})}>
                            <i className="material-icons">view_module</i>
                        </button>
                        <button className="btn btn-success btn-fab btn-fab-mini btn-round pull-right"
                                onClick={()=>this.setState({viewStyle: this.smallerViewStyle})}>
                            <i className="material-icons">view_comfy</i>
                        </button>
                    </div>
                </div>
                <div className="col-md-12">
                    {this.state.shots.map((item, index) => {
                        return(
                        <Link onClick={()=>this.showMainContainer()} key={index} to={{pathname: `/${item.id}`, state: {location: item.id }}}>
                            <Card
                                 title={item.title}
                                 textContainer={item.textContainer}
                                 data={item.updated_at}
                                 displayClass={this.state.viewStyle}
                                 img={item.images.normal}
                                 likes={item.likes_count}
                                 comments={item.comments_count}
                                 visibility={item.views_count}
                            />
                        </Link>
                        )
                    })}
                </div>
                <div className="col-md-12">
                     <button className="btn btn-success pull-right" onClick={this.loadMoreShots}>More</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Router>
                  <div className="container">
                      {!history.state ? this.buildUlComponent() : ''}
                      <Switch >
                          <Route path={`/:id`} component={PageDetails}/>
                      </Switch>
                  </div>
            </Router>
        );
    }
}

const cardRoute = () => {
    return (
        <Router>
            <Route component={ListCard}/>
        </Router>
    );
};

export default cardRoute;


