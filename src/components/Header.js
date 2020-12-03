import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ isHeaderSolid }) {
    return <header id='header' className={isHeaderSolid ? 'headerDiv headerSolid' : 'headerDiv'}>
        <menu className='headerMenu'>
            <li className='headerLinkText' id='link1'><Link to='/home' >Home</Link></li>
            <li className='headerLinkText' id='link2'><Link to='/business' >Business</Link></li>
            <li className='headerLinkText' id='link3'><Link to='/FAQ' >FAQ </Link></li>
            <li className='headerLinkText' id='link4'><Link to='/Kontakt' >Kontakt</Link></li>
        </menu>
    </header >
}