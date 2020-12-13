import React from 'react'
import './ConsumerPage.css'
import HeaderBlock from './HeaderBlock'
import FeatureBlocks from './FeatureBlocks'
import MiniBlocks from './MiniBlocks'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

export default function ConsumerPage() {

    return <div>

        <HeaderBlock />
        <FeatureBlocks />

        <MiniBlocks />

        <div className='businessLinkBlock'>
            <div className='defaultPageContainer'>
                <h1 className='BlockHeader'>Sind Sie Interes&shy;siert?</h1>
                <ScrollAnimation animateIn='animate__jackInTheBox' animateOnce={false}>
                    <div><Link to='/business'><h2>Mehr erfahren sie auf unserer Business-Seite</h2></Link></div>
                </ScrollAnimation>
            </div>
        </div>
    </div >
}