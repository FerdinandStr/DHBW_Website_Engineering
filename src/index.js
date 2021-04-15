import './globalStyle.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Layout.js'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/'><Layout /></Route>
        </Switch>
    </Router>,
    document.getElementById('root'))

// ONLY FOR DEV
// if (import.meta.hot) {
//     import.meta.hot.accept()
// }