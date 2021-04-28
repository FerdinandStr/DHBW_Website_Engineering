import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogLandingPage from './BlogLandingPage/BlogLandingPage'
import SingleBlogPage from './SingleBlogPage/SingleBlogPage'
import './style.css'

export default function BlogPage() {


    return <div className='defaultPageContainer'>
        <Switch>
            <Route path='/blog/:id'><SingleBlogPage /></Route>
            <Route path='/blog'><BlogLandingPage /></Route>
        </Switch>
    </div >
}