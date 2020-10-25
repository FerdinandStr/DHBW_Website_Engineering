import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {

    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').style.height = '30px'
        } else {
            document.getElementById('header').style.height = '80px'
        }
    }



    return <header id='header' className='headerDiv'>
        <div className='registerIcon'><img src='./noun_register_1753825.svg'></img></div>
        <Link to='/consumer' >Consumer Link</Link>
        <Link to='/business' >Business Link </Link>
    </header >
}