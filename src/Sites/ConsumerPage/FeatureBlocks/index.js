import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'




export default function FeatureBlocks() {


    return <div className='featureBlocksMainDiv'>

        <h1 className='BlockHeader'>So einfach gehts!</h1>

        <div className='featureBlockContainer relativePositionContainer'>
            <div className='blockText qrBlockDescription'>
                <h2>QR-Code scannen</h2>
                <p>Lesen sie einfach mit der App oder der Kamera Ihres Smartphones den QR-Code ein oder besuchen sie alternativ den dazugehörigen Link im Browser</p>
            </div>
            <div className='relativePositionContainer bgImgContainer'>
                <img loading='lazy' src='QrCodeBg.webp' className='bgImg' />
                <div className='QrCogoDiv'>
                    <ScrollAnimation animateIn='animate__pulse' animateOnce={false}>
                        <img loading='lazy' src='QrCogo.webp' />
                    </ScrollAnimation >
                </div>
            </div>
        </div>


        <div className='featureBlockContainer relativePositionContainer'>
            <div className='blockText phoneBlockDescription'>
                <h2>Formular ausfüllen</h2>
                <p>Füllen sie das Formular aus und fügen Sie falls nötig weitere Personen hinzu.</p>
                <p>Beim nächsten Restaurantbesuch werden Ihre Daten dann automatisch aus dem lokalen Speicher geladen.</p>
            </div>
            <div className='relativePositionContainer bgImgContainer'>
                <img loading='lazy' src='BgForPhone.webp' className='bgImg' />

                <ScrollAnimation animateIn='animate__fadeInRight' animateOnce={false} className='PhoneDiv'>
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


        <div className='featureBlockContainer relativePositionContainer lastFeatureBlock'>
            <div className='blockText phoneLeaveBlockDescription'>
                <h2>Danke für Ihren Besuch!</h2>
                <p>Das Verlassen muss am Ende nur noch in der App bestätigt werden,</p>
                <p>um den Anwesenheitszeitraum korrekt zu erfassen.</p>
            </div>
            <div className='relativePositionContainer bgImgContainer'>
                <img loading='lazy' src='LeaveBg.webp' className='bgImg' />
                {/* <div > */}
                <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce={false} className='phoneLeaveDiv'>
                    <img loading='lazy' src='MockupPhoneLeave.webp' />
                </ScrollAnimation >
                {/* </div> */}
            </div>
        </div>
    </div>
}