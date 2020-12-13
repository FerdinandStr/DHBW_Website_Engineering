import React from 'react'
import './Kontakt.css'
import { AiFillHome } from 'react-icons/ai'
import { AiFillClockCircle } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
export default function Kontakt() {

    return <div className='defaultPageContainer kontaktPageContainer'>
        <h1 className='BlockHeader'>Wir sind für Sie da</h1>
        <div className='IconContainerKontakt'>
            <div className='KontaktBlock'>
                <AiFillHome size={100} />
                <h3> Adresse:</h3>
                <p>CoGo GmbH<br />Marienstraße 20 <br />89518 Heidenheim </p>
            </div>
            <div className='KontaktBlock'>
                <AiFillClockCircle size={100} />
                <h3>Geschäftszeiten:</h3>
                <p>Montag - Sonntag (8:00 - 24:00 Uhr) <br></br>An Feiertagen (0:00 - 24:00 Uhr)</p>

            </div>
            <div className='KontaktBlock'>
                <AiFillPhone size={100} />
                <h3>Support erreichbar unter:</h3>
                <p> 07321/86903 <br /><a href='mailto:support@cogo.de'>support@cogo.de</a></p>
            </div>
        </div>
        <h1 className='BlockHeader'>Unser Team</h1>
        <div className='BitmojiContainerKontakt'>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitManni.webp' />
                <h4>Manfred M.</h4>
                <h5>CEO</h5>
                <p>"There is always a lighthouse, there's always a man, there's always a city."</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitFerd.webp' />
                <h4>Ferdinand S.</h4>
                <h5>CTO</h5>
                <p>"Nothing happend here ...."</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitTimo.webp' />
                <h4>Timo O.</h4>
                <h5>COO</h5>
                <p> !!!#+#1!*05***11D5</p>
            </div>
            <div className='BitmojiIconcontainer'>
                <img className='rund' src='./BitLenny.webp' />
                <h4>Lenny F.</h4>
                <h5>CMO</h5>
                <p>"Wo war Gondor ?"</p>
            </div>
        </div>
    </div>
}