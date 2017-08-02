import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import firebase from 'firebase'

import './App.css'

import Overview from './containers/overview'
import Header from './components/header'

const configurationOptions = {
  debug: true,
  apiKey: "AIzaSyCYNOeLu-OgvgkJrqTUEU0RfMiZxw9bPU0",
  authDomain: "bygggiganten-2185e.firebaseapp.com",
  databaseURL: "https://bygggiganten-2185e.firebaseio.com/",
}

firebase.initializeApp(configurationOptions)

const App = () => (
    <Router>
        <div>
            <Header />

            <Route exact path="/" component={ Overview } />
            <Route path="/topics" component={ Topics } />
        </div>
    </Router>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={ `${match.url}/rendering` }>
          Rendering with React
                </Link>
            </li>
            <li>
                <Link to={ `${match.url}/components` }>
          Components
                </Link>
            </li>
            <li>
                <Link to={ `${match.url}/props-v-state` }>
          Props v. State
                </Link>
            </li>
        </ul>

        <Route path={ `${match.url}/:topicId` } component={ Topic } />
        <Route
            exact
            path={ match.url }
            render={ () => (
                <h3>Please select a topic.</h3>
            ) }
        />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{ match.params.topicId }</h3>
    </div>
)

export default App