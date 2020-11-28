import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    /*
    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').style.height = '30px'
            document.getElementById('link1').style.padding = '0px'
            document.getElementById('link2').style.padding = '0px'
            document.getElementById('link3').style.padding = '0px'
            document.getElementById('link4').style.padding = '0px'
        } else {
            document.getElementById('header').style.height = '80px'
            document.getElementById('link1').style.padding = '30px'
            document.getElementById('link2').style.padding = '30px'
            document.getElementById('link3').style.padding = '30px'
            document.getElementById('link4').style.padding = '30px'
        }
    }*/



    return <header id='header' className='headerDiv'>
        {/* <div className='registerIcon'><img src='./noun_register_1753825.svg'></img></div> */}
        <menu className='headerMenu'>
            <li className='headerLinkText' id='link1'><Link to='/consumer' >Home</Link></li>
            <li className='headerLinkText' id='link2'><Link to='/business' >Business</Link></li>
            <li className='headerLinkText' id='link3'><Link to='/FAQ' >FAQ </Link></li>
            <li className='headerLinkText' id='link4'><Link to='/Kontakt' >Kontakt</Link></li>
        </menu>
    </header >
}