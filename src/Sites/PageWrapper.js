import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function PageWrapper(props) {

    return <div>
        <Header />
        <div className='mainContentDiv'>
            {props.children}</div>
        < Footer />
    </div >
}