import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './PageWrapperStyle.css'

export default function PageWrapper(props) {

    const isHeaderSolid = props.isHeaderSolid === false ? false : true

    return <div>
        <Header isHeaderSolid={isHeaderSolid} />
        <div className='mainContentDiv'>
            {props.children}</div>
        < Footer />
    </div >
}