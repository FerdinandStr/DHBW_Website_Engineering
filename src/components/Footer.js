import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default function Footer() {

    return <footer id='footer' className='footerDiv'>
        <div className='footerHead'><span>COGO</span></div>
        <div className='container'>
            <div className='FooterRowElement'>
                <div className='Textdata' >Für aktuelle Informationen:</div>
                <div className='links'>
                    <a href='https://experience.arcgis.com/experience/478220a4c454480e823b17327b2bf1d4'>Aktuelle Fallzahlen des RKI</a>
                </div>
                <div className='links'>
                    <a href='https://www.bundesregierung.de/breg-de/themen/coronavirus/coronavirus-aktuelle-informationen'>Informationen der Bundesregierung</a>
                </div>
            </div>
            <div className='FooterRowElement'>
                <div className='Textdata'>Download</div>
                <div className='linkGoogle'>
                    <a href='https://play.google.com/'><img loading='lazy' src='./icons/GooglePlayStore.svg' /></a>
                </div>
                <div className='linkApple'>
                    <a href='https://www.apple.com/de/ios/app-store/'><img loading='lazy' src='./icons/AppleAppStore.svg' /></a><br />
                </div>
            </div>
            <div className='FooterRowElement'>
                <div className='Textdata'>Folgt uns:</div>
                <div className='FooterSocialMediaCol'>
                    <div className='registerIcon'><a href='https://twitter.com/'><img loading='lazy' src='./icons/twitter.svg' /></a></div>
                    <div className='registerIcon'><a href='https://de-de.facebook.com/'><img loading='lazy' src='./icons/facebook.svg' /></a></div>
                </div>
                <div className='FooterSocialMediaCol'>
                    <div className='registerIcon'><a href='https://www.instagram.com'><img loading='lazy' src='./icons/instagram.svg' /></a></div>
                    <div className='registerIcon'><a href='https://de.linkedin.com/'><img loading='lazy' src='./icons/linkedIn.svg' /></a></div>
                </div>
            </div>
        </div>
        <div className='bottomFooterBar'>&copy;2020 Ferdinand Straß, Lenny Floruß, Timo Oswald, Manfred Meier &#124; <Link to='/Impressum'>Impressum</Link> &#124; Kontakt</div>
    </footer >
}