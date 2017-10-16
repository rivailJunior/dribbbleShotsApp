import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Page1 from './testes/page2';
import Page2 from './testes/page3';

const app = () => {
   return React.createElement(App);
};

class App extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.teste = [{
            component: Page1, path: 'page1'
        }, {
            component: Page2, path: 'page2'
        }]
    };

    render(){
        console.log('this.props', this.props.name);
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {
                            this.teste.map((item, index) => {
                                return <li key={index}><Link to={`/${item.path}`}> {item.path}</Link></li>
                            })
                        }
                    </ul>

                    <hr/>
                    {
                        this.teste.map((item, index) => {
                            return <Route key={index} path={`/${item.path}`} component={item.component}/>
                        })
                    }

                </div>
            </Router>
        );
    }
}
App.propTypes = {
    name: PropTypes.string
}
ReactDom.render(<App name="rivail"/>, document.getElementById('app'));
