import { useEffect, useState } from 'react'
import React from 'react'
import { getCMS, getCMSImgage } from '../../../helper/restService'
import './BlogLandingPageStyle.css'
import { Link } from 'react-router-dom'

export default function BlogLandingPage() {

    const [blogs, setBlogs] = useState()

    useEffect((() => {
        getCMS('/blogs', { withLocale: true })
            .then((data) => setBlogs(data.sort((a, b) => { return new Date(b.release_date) - new Date(a.release_date) })))
            .catch((data) => console.log('ERROR', data))
    }), [])


    const blogList = blogs
        ? blogs.map((blog, i) => {

            return <div key={blog.id} className={i % 2 == 0 ? 'landingPage_blogContainer' : 'landingPage_blogContainer lp_bcLeft'}>
                <div className='landingPage_blogTitle'><Link to={'/blog/' + blog.id}><h2>{blog.title_de}</h2></Link></div>
                <div className='landingPage_blogImg'>{blog.title_img ? <img src={getCMSImgage(blog.title_img.url)} /> : null} </div>
                <div className='landingPage_blogContent'><p>{shortenContent(blog.content_de)}</p></div>
                <div className='landingPage_blogLink'><Link to={'/blog/' + blog.id}><p>Erfahren sie mehr hier</p></Link></div>
            </div >
        })

        : []


    return <>
        <h1 className='BlockHeader'>Alle News rund um CoGo</h1>
        <div className='mainParent'>{blogList}</div>
    </>
}

function shortenContent(text) {
    const shortText = text.split(' ').filter((el, i) => i < 50 ? el : false).join(' ') + ' ... '
    return shortText
}