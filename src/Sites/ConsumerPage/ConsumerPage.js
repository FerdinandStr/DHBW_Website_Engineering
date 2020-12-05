import React from 'react'
import './ConsumerPage.css'
import 'animate.css'
import HeaderBlock from './HeaderBlock'
import FeatureBlocks from './FeatureBlocks'
import MiniBlocks from './MiniBlocks'
import { Link } from 'react-router-dom'

export default function ConsumerPage() {

    return <div>

        <HeaderBlock />
        <FeatureBlocks />
        <div className='defaultPageContainer'>
            <MiniBlocks />
        </div>

        <h1 className='BlockHeader'>Sie sind Interessiert? Mehr erfahren sie auf unserer Business-Seite</h1>
        <Link to='/business'>TODO !!!!</Link>
    </div >
}