import React from 'react'
import GenericFoldingContainer from '../components/FoldingContainer/GenericFoldingContainer'
import './FAQ.css'

export default function FAQ() {



    return <div>
        <input type='checkbox' id='title1' />
        <label htmlFor='title1'>Accordion One</label>

        <div className='content'>
            <p>Your content goes here.</p>
        </div>

        <input type='checkbox' id='title2' />

        <label htmlFor='title2'>Accordion Two</label>
        <GenericFoldingContainer headlineComponent={<h2>HALLO WELT</h2>}>
            <div className='content'>
                <p>Your content goes here.</p>
            </div>
        </GenericFoldingContainer>

        <input type='checkbox' id='title3' />
        <label htmlFor='title3'>Accordion Three</label>

        <div className='content'>
            <p>Your content goes here.</p>
        </div>
    </div>
}