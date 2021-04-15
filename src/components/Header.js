import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({ isHeaderSolid }) {
    return <header id='header' className={isHeaderSolid ? 'headerDiv headerSolid' : 'headerDiv'}>
        <menu className='headerMenu'>
            <li className='headerLinkText' id='link1'><Link to='/home' >Home</Link></li>
            <li className='headerLinkText' id='link2'><Link to='/business' >Business</Link></li>
            <li className='headerLinkText' id='link3'><Link to='/faq' >FAQ </Link></li>
            <li className='headerLinkText' id='link4'><Link to='/kontakt' >Kontakt</Link></li>
            <li className='headerLinkText' id='link4'><Link to='/blog' >Blog</Link></li>
            {
                isHeaderSolid
                    ? null
                    : <><li className='headerLinkImg'><a href='https://play.google.com/'><img loading='lazy' src='./GooglePlayStore.svg' /></a></li>
                        <li className='headerLinkImg'><a href='https://www.apple.com/de/ios/app-store/'><img loading='lazy' src='./AppleAppStore.svg' /></a></li>
                    </>
            }
        </menu>
    </header >
}