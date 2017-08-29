import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'

import Overview from './containers/overview'
import NewCustomer from './containers/new-customer'
import Assignment from './containers/assignment'
import DefineAssignments from './containers/define-assignments'
import Categories from './containers/categories'
import Header from './components/header'

import './App.css'

class App extends Component {
    componentWillMount() {
        this.props.actions.listenToChanges()
    }
    render() {
        return (
            <Router>
                <div className="container" style={ { marginTop: '2em' } }>
                    <Header />

                    <Route exact path="/" render={ props => <Overview { ...this.props } /> } />
                    <Route path="/newcustomer/:id" component={ NewCustomer } />
                    <Route path="/assignment/:id" component={ Assignment } />
                    <Route path="/define-assignments/:id" component={ DefineAssignments } />
                    <Route path="/categories/:id" component={ Categories } />
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