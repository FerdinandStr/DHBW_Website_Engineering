import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCMS, postCMS } from '../../../helper/restService'
import TextareaAutosize from 'react-textarea-autosize'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './SingleBlogPageStyle.css'

export default function SingleBlogPage() {
    const params = useParams()
    const blogId = params.id
    const [blogData, setBlogData] = useState()
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState()

    useEffect(() => {
        getCMS('/blogs/' + blogId)
            .then(resp => {
                setBlogData(resp)
                setComments(resp.comments.reverse())
            })
            .catch(resp => console.log('ERROR ', resp))
    }, [blogId])


    const commentArea = comments.map(comment =>
        <div key={comment.id} className='commentDiv'>
            <p className='commentHeader'>Ein Nutzer schrieb am {new Date(comment.created_at).toLocaleString('en-GB')}</p>
            <p key={comment.id}>
                {comment.content}
            </p>
        </div >)

    return <div className='singleBlogPage'>
        <AiOutlineArrowLeft size='1em' />
        <Link to='/blog'><span>Zurück zum Blog</span></Link>

        {blogData
            ? <div>
                <h2>{blogData.title_de}</h2>
                <h3>{blogData.subtitle_de}</h3>
                <p>{blogData.content_de}</p>
            </div>
            : '404 temp Not found'
        }

        <div className='commentArea'>
            {commentArea}
        </div>
        <div className='commentWriteArea'>
            <h3>Schreiben Sie Ihre Meinung dazu:</h3>
            <div><TextareaAutosize className='commentInput' value={commentInput} onChange={(e) => setCommentInput(e.target.value)} /></div>
            <div>
                <button className='sendCommentButton' onClick={() => {
                    const data = {
                        content: commentInput,
                        blog: blogId
                    }
                    postCMS('/comments', data)
                }}>Senden</button>
            </div>
        </div>

    </div >
}