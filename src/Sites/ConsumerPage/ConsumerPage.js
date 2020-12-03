import React from 'react'
import './ConsumerPage.css'
import 'animate.css'
import HeaderBlock from './HeaderBlock'
import FeatureBlocks from './FeatureBlocks'
import MiniBlocks from './MiniBlocks'

export default function ConsumerPage() {

    return <div>

        <HeaderBlock />
        <FeatureBlocks />
        <div className='defaultPageContainer'>
            <MiniBlocks />
        </div>
    </div >
}