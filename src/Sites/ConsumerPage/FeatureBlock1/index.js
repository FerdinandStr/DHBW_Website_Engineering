import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'

const sn = 'fb1_'
export default function FeatureBlock1() {


    return <div className='fullBlock'>
        <h1>Wie funktionierts?</h1>
        <div className={`${sn}scanBlock ${sn}block`}>
            <div className='blockImageDiv'>
                <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={true}>
                    <img className={`${sn}qrCode`} loading='lazy' src='./KlemmQR.jpg' />
                </ScrollAnimation>
            </div>
            <div className='blockDescription'>
                <h2>QR-Code scannen</h2>
                <p>Lesen sie einfach mit der App oder der Kamera Ihres Smartphones den QR-Code ein oder besuchen sie alternativ den dazugehörigen Link im Browser</p>
            </div>
        </div>
        <div className={`${sn}fillBlock ${sn}block`}>
            <div className='blockDescription'>
                <h2>Formular Ausfüllen</h2>
                <p>Füllen sie das Formular aus und fügen Sie falls nötig weitere Personen hinzu.</p>
                <p>Beim nächsten Restaurantbesuch werden Ihre Daten dann automatisch aus dem lokalen Speicher geladen.</p>
            </div>
            <div className='blockImageDiv'>
                <ScrollAnimation animateIn='animate__fadeInRight'>
                    <img className={`${sn}phoneImg`} loading='lazy' src='./MockupPhone.jpg' />
                </ScrollAnimation>
            </div>
        </div>
        <div className={`${sn}doneBlock ${sn}block`}>
            <h3>Genießen >></h3>
            <div><span>Name</span><span>Max Mustermann</span></div>
            <div><span>Adresse:</span><span>MusterStraße 69</span></div>
            <span>Email</span><span>max@mustermann@besteMail.de</span>
        </div>

        <div className={`${sn}leaveBlock ${sn}block`}>
            <h3>{'<< Verlassen'}</h3>
            <div><span></span></div>
        </div>
    </div >
}