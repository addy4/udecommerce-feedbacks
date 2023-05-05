import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';
import Landing from './Landing';
import './App.css';

const Dashboard = () => <h1> Dashboard </h1>;

/*
const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
};
*/

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
