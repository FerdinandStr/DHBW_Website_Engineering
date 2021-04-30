import React, { useEffect, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { getCMS, postCMS } from '../../../helper/restService'
import './SingleBlogPageStyle.css'

export default function CommentArea(props) {
    const { blogId } = props
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState('')
    const [commentTimeout, setCommentTimeout] = useState(false)
    const sendButtonDisabled = commentTimeout || (commentInput.length < 10 && commentInput.length > 1337)


    function updateComments() {
        getCMS('/blogs/' + blogId)
            .then(resp => {
                setComments(resp.comments)
            })
            .catch(resp => console.log('ERROR ', resp))
    }
    useEffect(() => {
        updateComments()
    }, [blogId])

    //Activate timeout after commenting if cookie is present
    useEffect(() => {
        const interval = setInterval(() => {
            const timeoutCookie = decodeURIComponent(document.cookie).split(';').find((el) => el.includes('commentTimeout'))
            timeoutCookie ? setCommentTimeout(true) : setCommentTimeout(false)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const commentArea = comments.map(comment =>
        <div key={comment.id} className='commentDiv'>
            <p className='commentHeader'>Ein Nutzer schrieb am {new Date(comment.created_at).toLocaleString('en-GB')}</p>
            <p key={comment.id}>
                {comment.content}
            </p>
        </div >)


    return <>
        <div className='commentArea'>
            {commentArea}
        </div>
        <div className='commentWriteArea'>
            <h3>Schreiben Sie Ihre Meinung dazu:</h3>
            <div><TextareaAutosize className='commentInput' value={commentInput} onChange={(e) => setCommentInput(e.target.value)} /></div>
            <div>
                <button className={sendButtonDisabled ? 'cogoButton buttonDisabled' : 'cogoButton'}
                    disabled={sendButtonDisabled}
                    onClick={() => {
                        const data = {
                            content: commentInput,
                            blog: blogId
                        }

                        postCMS('/comments', data).then(() => {
                            //create Timeout cookie
                            let date = new Date()
                            date.setTime(date.getTime() + (60 * 1000))
                            const expiry = '; expires=' + date.toUTCString()
                            document.cookie = 'commentTimeout=true' + expiry + '; path=/'

                            updateComments()
                        })

                    }}>Senden</button>
            </div>
        </div>
    </>
}