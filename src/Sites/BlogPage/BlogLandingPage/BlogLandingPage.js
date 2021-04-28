import { useEffect, useState } from 'react'
import React from 'react'
import { getCMS, getCMSImgage } from '../../../helper/restService'
import './BlogLandingPageStyle.css'
import { Link } from 'react-router-dom'

export default function BlogLandingPage() {

    const [blogs, setBlogs] = useState()

    useEffect((() => {
        getCMS('/blogs')
            .then((data) => setBlogs(data))
            .catch((data) => console.log('ERROR', data))
    }), [])


    const blogList = blogs
        ? blogs.map(blog =>

            <div key={blog.id} className='landingPage_blogContainer'>
                <Link to={'/blog/' + blog.id}><h2 className='landingPage_blogTitle'>{blog.title_de}</h2></Link>
                <h3 className='landingPage_blogSubtitle'>{blog.subtitle_de}</h3>
                <div className='landingPage_blogContent'><p>{shortenContent(blog.content_de)}</p></div>
                <div className='landingPage_blogImg'><img src={getCMSImgage(blog.title_img.url)} /></div>
            </div >)
        : []


    return <>
        <h1 className='BlockHeader'>Alle News rund um CoGo</h1>
        {blogList}
    </>
}

function shortenContent(text) {

    const shortText = text.split(' ').filter((el, i) => i < 50 ? el : false).join(' ') + ' ... '

    console.log(shortText)

    return shortText
}