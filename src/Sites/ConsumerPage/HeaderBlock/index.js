import React, { useEffect, useState } from 'react'
import './style.css'

export default function HeaderBlock() {

    const [showOld, setShowOld] = useState(true)
    //5 sekunden timer
    useEffect(() => {
        const timer = setInterval(() => {
            setShowOld(value => !value)
        }, 6000)
        return () => clearInterval(timer)
    })

    return <div className='section header'>
        <div className='section imageArea'><img className='headerImageLeft' loading='lazy' src='./Geschaeftsidee-Per-App-im-Restaurant-bestellen2.jpg' /></div>
        <div className='section textArea '>
            <div className={showOld ? 'textHead1 flipOut' : 'textHead1 flipIn'}>
                {/* <p className='goldArrow alignLeft'>{'>>'}</p> */}
                <h1 className='headerOldText'>Die Corona Anwesenheitserfassung mit Papier?</h1>
                <h1 className='headerOldText'>Veraltet. Umständlich. Datenchaos.</h1>
                {/* <p className='goldArrow alignRight'>{'<<'}</p> */}
            </div>
            <div className={showOld ? 'textHead2 flipIn' : 'textHead2 flipOut'}>
                {/* <p className='goldArrow alignLeft'>{'>>'}</p> */}
                <p><h1>CoGo</h1></p>
                <p><h1>Modern. Simpel. Sicher.</h1></p>
                <span><h1>Wir erleichtern die Datenerfassung</h1></span>
                {/* <p className='goldArrow alignRight'>{'<<'}</p> */}
            </div>
        </div>
    </div>
}