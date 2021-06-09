import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCMS, getCMSImgage } from '../../../helper/restService'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './SingleBlogPageStyle.css'
import ReactMarkdown from 'react-markdown'

import CommentArea from './CommentArea'

export default function SingleBlogPage() {
    const params = useParams()
    const blogId = params.id
    const [blogData, setBlogData] = useState()
    const [comments, setComments] = useState([])

    useEffect(() => {
        getCMS('/blogs/' + blogId, { withLocale: true })
            .then(resp => {
                setBlogData(resp)
                setComments(resp.comments.reverse())
            })
            .catch(resp => console.log('ERROR ', resp))
    }, [blogId])


    return <div className='singleBlogPage'>
        <AiOutlineArrowLeft size='1em' />
        <Link to='/blog'><span>Zurück zum Blog</span></Link>

        {blogData
            ? <div>
                <h2>{blogData.title_de}</h2>
                {blogData.banner_img ? <img loading='lazy' className='blogBannerImg' src={getCMSImgage(blogData.banner_img.url)} /> : null}
                <h3>{blogData.subtitle_de}</h3>
                <ReactMarkdown>{blogData.content_de}</ReactMarkdown>
            </div>
            : '404 temp Not found'
        }

        <CommentArea blogId={blogId} comments={comments} />
    </div >
}