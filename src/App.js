import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import firebaseApp from './firebase'

import './App.css'

import Overview from './containers/overview'
import NewCustomer from './containers/new-customer'
import Assignment from './containers/assignment'

import Header from './components/header'

class App extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        firebaseApp.database().ref('/anbud').once('value').then(snapshot => {
            this.setState({
                data: snapshot.val(),
            })
        })
    }

    render() {
        return (
            <Router>
                <div style={ { padding: '2em' } }>
                    <Header />

                    <Route exact path="/" render={ props => <Overview data={ this.state.data } { ...props } /> } />
                    <Route path="/newcustomer/:id" component={ NewCustomer } />
                    <Route path="/assignment/:id" component={ Assignment } />
                </div>
            </Router>
        )
    }
}

export default App