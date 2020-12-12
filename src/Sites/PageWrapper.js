import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './PageWrapperStyle.css'

export default function PageWrapper(props) {

    const isHeaderSolid = props.isHeaderSolid === false ? false : true

    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return <div>
        <Header isHeaderSolid={isHeaderSolid} />
        <div className='mainContentDiv'>
            {props.children}</div>
        < Footer />
    </div >
}