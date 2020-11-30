import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'

export default function FeatureBlocks() {

    return <div>

        <h1>Wie funktionierts?</h1>

        <div className='featureBlockContainer'>
            <img src='QrCodeBg.webp' className='bgImg' />
            <div className='QrCogoDiv'>
                <ScrollAnimation animateIn='animate__pulse' animateOnce={false}>
                    <img src='QrCogo.webp' />
                </ScrollAnimation >
            </div>
            <div className='blockText qrBlockDescription'>
                <h2>QR-Code scannen</h2>
                <p>Lesen sie einfach mit der App oder der Kamera Ihres Smartphones den QR-Code ein oder besuchen sie alternativ den dazugehörigen Link im Browser</p>
            </div>
        </div>

        <div className='featureBlockContainer'>
            <img src='BgForPhone.webp' className='bgImg' />
            <div className='PhoneDiv'>
                <ScrollAnimation animateIn='animate__fadeInRight' animateOnce={false}>
                    <img src='MockupPhone.webp' />
                </ScrollAnimation >
            </div>
            <div className='blockText phoneBlockDescription'>
                <h2>Formular ausfüllen</h2>
                <p>Füllen sie das Formular aus und fügen Sie falls nötig weitere Personen hinzu.</p>
                <p>Beim nächsten Restaurantbesuch werden Ihre Daten dann automatisch aus dem lokalen Speicher geladen.</p>
            </div>
        </div>


        <div className='featureBlockContainer'>
            {/* <img src='WoodPlank.webp' className='bgImg' /> */}
            {/* <ScrollAnimation animateIn='animate__fadeInRight' animateOnce={false}> */}
            <div className='blockText woodPlankDescription'>
                <h1>Genießen Sie ihren</h1>
                <h1>Restaurantbesuch!</h1>
                {/* <p>Auch in schwierigen Zeiten wie diesen sollten Sie sich vorallem über Ihre Lokale umgebung Freuen und diese Unterstützen :)</p> */}
            </div>
            {/* </ScrollAnimation > */}
        </div>
    </div>
}