import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'


export default function FeatureBlocks() {

    return <div className='featureBlocksMainDiv'>

        <h1 className='BlockHeader'>So einfach gehts!</h1>

        {/* //relativer Container */}
        <div className='relativePositionContainer featureBlockContainer'>
            {/* //child mit position absolute landet auf dem container => z.B. top:15% left:30% */}
            <div className='blockText qrBlockDescription'>
                <h2>QR-Code scannen</h2>
                <p>Lesen sie einfach mit der App oder der Kamera Ihres Smartphones den QR-Code ein oder besuchen sie alternativ den dazugehörigen Link im Browser</p>
            </div>
            {/* //relativer Container, der ganz oben sitzt, solange der text absolut positioniert ist*/}
            <div className='relativePositionContainer'>
                {/* erstes element, immer oben in diesem div */}
                <img loading='lazy' src='QrCodeBg.webp' className='bgImg' />
                {/* child mit position absolute wird über das Bild bewegt mit => z.b. top:8% left:25%*/}
                <div className='QrCogoDiv'>
                    <ScrollAnimation animateIn='animate__pulse' animateOnce={false}>
                        <img loading='lazy' src='QrCogo.webp' />
                    </ScrollAnimation >
                </div>
            </div>
        </div>


        <div className='relativePositionContainer featureBlockContainer'>
            <div className='blockText phoneBlockDescription'>
                <h2>Formular ausfüllen</h2>
                <p>Füllen sie das Formular aus und fügen Sie falls nötig weitere Personen hinzu.</p>
                <p>Beim nächsten Restaurantbesuch werden Ihre Daten dann automatisch aus dem lokalen Speicher geladen.</p>
            </div>
            <div className='relativePositionContainer'>
                <img loading='lazy' src='BgForPhone.webp' className='bgImg' />

                <ScrollAnimation animateIn='animate__fadeInRight' delay={200} animateOnce={false} className='PhoneDiv'>
                    <img loading='lazy' src='MockupPhoneStart.webp' />
                </ScrollAnimation >
            </div>
        </div>


        <div className='featureBlockContainer'>
            <div className='blockText tableDescription'>
                <h1>Genießen Sie ihren</h1>
                <h1>Restaurant&shy;besuch!</h1>
            </div>
        </div>


        <div className='relativePositionContainer featureBlockContainer lastFeatureBlock'>
            <div className='blockText phoneLeaveBlockDescription'>
                <h2>Danke für Ihren Besuch!</h2>
                <p>Das Verlassen muss am Ende nur noch in der App bestätigt werden,</p>
                <p>um den Anwesenheitszeitraum korrekt zu erfassen.</p>
            </div>
            <div className='relativePositionContainer'>
                <img loading='lazy' src='LeaveBg.webp' className='bgImg' />
                <ScrollAnimation animateIn='animate__fadeInLeft' delay={200} animateOnce={false} className='phoneLeaveDiv'>
                    <img loading='lazy' src='MockupPhoneLeave.webp' />
                </ScrollAnimation >
            </div>
        </div>
    </div>
}