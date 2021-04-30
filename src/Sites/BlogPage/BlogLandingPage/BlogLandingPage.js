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
        ? blogs.map((blog, i) => {

            console.log(i % 2)

            return <div key={blog.id} className={i % 2 == 0 ? 'landingPage_blogContainer' : 'landingPage_blogContainer lp_bcLeft'}>
                <Link to={'/blog/' + blog.id}><h2 className='landingPage_blogTitle'>{blog.title_de}</h2></Link>
                <div className='landingPage_blogContent'><p>{shortenContent(blog.content_de)}</p></div>
                <div className='landingPage_blogImg'>{blog.title_img ? <img src={getCMSImgage(blog.title_img.url)} /> : null} </div>
                <div className='landingPage_blogLink'><Link to={'/blog/' + blog.id}><p>Erfahren sie mehr hier ...</p></Link></div>
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

    console.log(shortText)

    return shortText
}