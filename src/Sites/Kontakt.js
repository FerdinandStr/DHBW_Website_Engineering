import React from 'react'
import './Kontakt.css'
import { AiFillHome } from 'react-icons/ai'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiTwotonePhone } from 'react-icons/ai'
export default function Kontakt() {

    return <div className='defaultPageContainer defaultPageContainerKontakt'>
        <h1>Wir sind für Sie da</h1>
        <div className='IconContainerKontak'>
            <div className='Kontakticon1'><AiFillHome size={100} /> <br />
                <h3> Adresse:</h3>
                <p>CoGo GmbH<br />Marienstraße 20 <br />89518 Heidenheim </p>
            </div>
            <div className='Kontakticon1'><AiFillClockCircle size={100} /><br />
                <h3>Geschäftszeiten:</h3>
                <p>Montag - Sonntag (8:00 - 24:00 Uhr) <br></br>An Feiertagen (:00 - 24:00 Uhr)</p>

            </div>
            <div className='Kontakticon1'><AiTwotonePhone size={100} /> <br />
                <h3>Support erreichbar unter:</h3>
                <p> 07321/86903 <br />support@cogo.de</p>
            </div>
        </div>
        <h1>Wir sind für Sie da</h1>
        <div className='BitmojiContainerKontakt'>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitManni.jpeg' />
                <p>"There is always a lighthouse, there's always a man, there's always a city."</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitFerd.png' />
                <p>"Nothing happend here ...."</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitTimo.jpeg' />
                <p> !!!#+#1!*05***11D5</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitLenny.jpeg' />
                <p>"Wo war Gondor ?"</p>
            </div>
        </div>
    </div>
}