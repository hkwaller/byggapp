import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import firebaseApp from './firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'

import './App.css'

import Overview from './containers/overview'
import NewCustomer from './containers/new-customer'
import Assignment from './containers/assignment'

import Header from './components/header'

class App extends Component {
    componentWillMount() {
        this.props.actions.fetchAnbud()
    }
    render() {
        console.log(this.props)
        return (
            <Router>
                <div style={ { padding: '2em' } }>
                    <Header />

                    <Route exact path="/" render={ props => <Overview { ...props } /> } />
                    <Route path="/newcustomer/:id" component={ NewCustomer } />
                    <Route path="/assignment/:id" component={ Assignment } />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    anbud: state.anbud,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)