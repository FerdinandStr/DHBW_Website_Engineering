import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {

    return <footer className='footerDiv'>
        {/* <div className='footerHead'><span>COGO</span></div> */}
        <div className='footerContentDiv'>
            <div className='FooterFlexChild'>
                <h3 className='Textdata' >Navigation</h3>
                <Link to="/home">Startseite</Link>
                <Link to="/business">Business</Link>
                <Link to="/FAQ">FAQ</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/impressum">Impressum</Link>
            </div>
            <div className='FooterFlexChild'>
                <h3 className='Textdata' >Aktuelle Informationen</h3>
                <div className='links'>
                    <a href='https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4'>Aktuelle Fallzahlen des RKI</a>
                </div>
                <div className='links'>
                    <a href='https://www.bundesregierung.de/breg-de/themen/coronavirus/coronavirus-aktuelle-informationen'>Informationen der Bundesregierung</a>
                </div>
                {/* <div>Icons made by <a href='https://www.flaticon.com/authors/eucalyp' title='Eucalyp'>Eucalyp</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div> */}
            </div>
            <div className='FooterFlexChild'>
                <h3 className='Textdata'>Download</h3>
                <div className='downloadLinkContainer'>
                    <a href='https://play.google.com/'><img loading='lazy' src='./GooglePlayStore.svg' /></a>
                </div>
                <div className='downloadLinkContainer'>
                    <a href='https://www.apple.com/de/ios/app-store/'><img loading='lazy' src='./AppleAppStore.svg' /></a>
                </div>
            </div>
            <div className='FooterFlexChild'>
                <h3 className='Textdata'>Folgt uns</h3>
                <div className='FooterSocialMediaCol'>
                    <div className='socialIcon'><a href='https://twitter.com/'><img loading='lazy' src='./twitter.svg' /></a></div>
                    <div className='socialIcon'><a href='https://de-de.facebook.com/'><img loading='lazy' src='./facebook.svg' /></a></div>
                </div>
                <div className='FooterSocialMediaCol'>
                    <div className='socialIcon'><a href='https://www.instagram.com'><img loading='lazy' src='./instagram.svg' /></a></div>
                    <div className='socialIcon'><a href='https://de.linkedin.com/'><img loading='lazy' src='./linkedIn.svg' /></a></div>
                </div>
            </div>
        </div>
        <div className='bottomFooterBar'>&copy;2020 Ferdinand Straß, Lenny Floruß, Timo Oswald, Manfred Meier &#124; <Link to='/Impressum'>Impressum</Link> &#124; <Link to='/Kontakt'>Kontakt</Link></div>
    </footer >
}