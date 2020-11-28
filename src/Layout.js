import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom'

import Header from './components/Header'
import ConsumerPage from './Sites/ConsumerPage/ConsumerPage'
import Footer from './components/Footer'
import BusinessPage from './Sites/BusinessPage'
import Kontakt from './Sites/Kontakt'
import Impressum from './Sites/Impressum'
import FAQ from './Sites/FAQ'

import PageWrapper from './Sites/PageWrapper'
import CoGoMockup from './Sites/app/CoGoMockup'

export default function App() {

    const history = useHistory()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        //get cookie
        const passwordFromCookie = decodeURIComponent(document.cookie)
            .split(';')
            .filter(el => el.includes('password'))
            .map(el => el.substring(el.indexOf('=') + 1, el.length))
        console.log(passwordFromCookie)


        if (passwordFromCookie[0] === 'MeinenHerzlichenGlühstrumpf') {
            setIsLoggedIn(true)
            console.log('WE ARE IN')
        } else {
            history.push('/login')
        }

    }, [isLoggedIn, history])


    return isLoggedIn ? <div>


        <Switch>
            <Redirect exact from='/' to='consumer' />
            <Route path='/c/:id?'><CoGoMockup /></Route>
            <Route path='/consumer'><PageWrapper><ConsumerPage /></PageWrapper></Route>
            <Route path='/business'><PageWrapper><BusinessPage /></PageWrapper></Route>
            <Route path='/Kontakt' ><PageWrapper><Kontakt /></PageWrapper></Route>
            <Route path='/Impressum' ><PageWrapper><Impressum /></PageWrapper></Route>
            <Route path='/FAQ' ><PageWrapper><FAQ /></PageWrapper></Route>
            <Route ><div>//TODO Implement NoMatch 404</div></Route>
        </Switch >
    </div >

        : null
}