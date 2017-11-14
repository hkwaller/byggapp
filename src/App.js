import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'

import Overview from './containers/Overview'
import NewCustomer from './containers/NewCustomer'
import Assignment from './containers/Assignment'
import DefineAssignments from './containers/DefineAssignments'
import Categories from './containers/Categories'
import Header from './components/Header'

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
                    <Route path="/categories/:id" component={ Categories } />
                    <Route path="/define-assignments/:id" component={ DefineAssignments } />
                    <Route path="/assignment/:id" component={ Assignment } />
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    anbud: state.anbud,
    drafts: state.drafts,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)