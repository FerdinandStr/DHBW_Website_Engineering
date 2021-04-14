import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react'
import { getCMS } from "../../helper/restService"

export default function helloWorld(counter) {

    const [blogs, setBlogs] = useState()

    useEffect((() => {
        getCMS("/faqs")
            .then((data) => setBlogs(data))
            .catch((data) => console.log("ERROR", data))
    }), [])


    if (blogs) {
        return blogs.map(blog => {
            return <div>
                <h2>{blog.title_de}</h2>
                <p>{blog.content_de}</p>
            </div>
        })
    }

    return "Nix da"
}