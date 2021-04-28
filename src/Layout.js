import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import ConsumerPage from './Sites/ConsumerPage/ConsumerPage'
import BusinessPage from './Sites/BusinessPage/BusinessPage'
import Kontakt from './Sites/Kontakt'
import Blog from './Sites/BlogPage'
import Impressum from './Sites/Impressum'
import FAQ from './Sites/FAQ'

import PageWrapper from './Sites/PageWrapper'
import CoGoMockup from './Sites/app/CoGoMockup'

export default function App() {
    return <div>
        <Switch>
            <Redirect exact from='/' to='home' />
            <Route path='/c/:id?'><CoGoMockup /></Route>
            <Route path='/home'><PageWrapper isHeaderSolid={false}><ConsumerPage /></PageWrapper></Route>
            <Route path='/business'><PageWrapper><BusinessPage /></PageWrapper></Route>
            <Route path='/kontakt' ><PageWrapper><Kontakt /></PageWrapper></Route>
            <Route path='/blog' ><PageWrapper><Blog /></PageWrapper></Route>
            <Route path='/impressum' ><PageWrapper><Impressum /></PageWrapper></Route>
            <Route path='/faq' ><PageWrapper><FAQ /></PageWrapper></Route>

            <Route ><Link to='/home'><div className='flexBoxCenterColumn'><img src='./404Image.png' className='Error404Image' /></div></Link></Route>
        </Switch >
    </div >
}