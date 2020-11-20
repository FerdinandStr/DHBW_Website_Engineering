import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './Layout.css'

import Header from './components/Header'
import ConsumerPage from './Sites/ConsumerPage'
import Footer from './components/Footer'
import BusinessPage from './Sites/BusinessPage'
import Kontakt from './Sites/Kontakt'
import Impressum from './Sites/Impressum'


export default function App() {


    return (
        <Router>

            <Header />
            <div className='Backgroundwrap'>
                <div className='mainContentDiv'>
                    <Switch>
                        <Route path='/consumer'><ConsumerPage /></Route>
                        <Route path='/business'><BusinessPage /></Route>
                        <Route path='/Kontakt' ><Kontakt /></Route>
                        <Route path='/Impressum' ><Impressum /></Route>
                    </Switch >
                </div>
            </div>

            < Footer />

        </Router>
    )
}