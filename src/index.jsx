import React, {Component} from 'react';
import ReactDom from 'react-dom';
import CardList from './components/cardList';
import Main from './pages/main';
// import './app.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            shots: []
        }
    }


    render(){
        return (
            <Main >
                <CardList />
            </Main>
        );
    }
}

ReactDom.render(<App/>, document.getElementById("app"));