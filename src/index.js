
import './globalStyle.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Layout.js'
import LoginMask from './Sites/Login'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/login'><LoginMask /></Route>
            <Route path='/'><Layout /></Route>
        </Switch>
    </Router>,
    document.getElementById('root'))


if (import.meta.hot) {
    import.meta.hot.accept()
}