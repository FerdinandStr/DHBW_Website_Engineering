import React from 'react'
import { Link } from 'react-router-dom'
import { cmsURL } from '../../helper/restService'
import './BusinessPageStyle.css'



export default function BusinessPage() {
    //1 cmsURL
    //2 /api

    return <div className='defaultPageContainer bpc'>
        <div className='businessBlock'>
            <img className='busIcons busCogoLogo' src='./CogoLogo.svg' />
            <div className='businessTextContainer'>
                <h2>Nutzen Sie CoGo!</h2>
                <p>Corona trifft uns alle sehr hart. Besonders allerdings kleinere Unternehmen, wie z.B. Restaurants und Bars. Wir haben uns das Ziel gesetzt, diese schwierigen Umstände für die Gastronomie zu erleichtern. Sämtliche Vorgaben der Regierung, bezüglich Datenerfassung zur Kontaktverfolgung, übernehmen wir mit unserer App. Dabei müssen Ihre Kunden lediglich einen QR-Code scannen, denen wir Ihnen bereitstellen.</p>
            </div>
        </div>

        <div className='businessBlock'>
            <img className='busIcons flexAlignRight' src='./iconDatenschutz.webp' />
            <div className='businessTextContainer flexAlignLeft'>
                <h2>Höchster Sicherheitsstandard</h2>
                <p>Die Daten Ihrer Kunden werden durch unsere Software vertraulich aufgenommen, verschlüsselt und auf deutschen Servern gespeichert. Lediglich Sie als Betreiber haben die Möglichkeit die Kontaktdaten Ihrer Gäste einzusehen, um diese ggf. auf Ihre Richtigkeit überprüfen zu können. Eine Weitergabe an Dritte findet nicht statt. Nach den aktuellen Vorgaben werden die Daten Ihrer Kunden innerhalb von 4 Wochen automatisch gelöscht.</p>
            </div>
        </div>

        <div className='businessBlock'>
            <img className='busIcons' src='./iconComputer.webp' />
            <div className='businessTextContainer'>
                <h2>Vollständig Automatisiert!</h2>
                <p>Durch die moderne und automatisierte Datenerfassungssoftware ist es uns möglich, einen positiven Corona-Fall, zu analysieren und die Kontaktpersonen zu identifizieren. Durch unsere App können wir die genauen An- und Abreisezeiten  erfassen und nur die Personen zu kontaktieren, die mit der infizierten Person anwesend waren.
                </p>
            </div>
        </div>

        <div className='businessBlock'>
            <img className='busIcons flexAlignRight' src='./iconSupport.webp' />
            <div className='businessTextContainer flexAlignLeft'>
                <h2>Kundenservice</h2>
                <p>Wir bieten für Sie einen 24/7 Kundenservice, der Ihnen alle Fragen rund um unsere App beantworten kann. Ganz gleich, ob Sie ein Besucher einer Bar oder Restaurantbesitzer sind, wir können auf jeden Fall weiterhelfen. <Link to='/Kontakt'>Kontaktieren</Link> Sie uns gerne unter 07321/86903 oder schreiben Sie uns ihre Fragen einfach per E-Mail (<a href='mailto:support@cogo.de'>support@cogo.de</a>)!</p>
            </div>
        </div>

        <div className='businessBlock'>
            <img className='busIcons' src='./iconAngebot.webp' />
            <div className='businessTextContainer'>
                <h2>Unser Preis</h2>
                <p>Durch unsere Vollautomatische Software können wir unsere Preise sehr gering halten und verlangen nur eine Provision von 0,01 €/Kunde.
                    Durch den geringen Preis möchten wir vor allem Sie in den schwierigen Zeiten unterstützen.</p>
                <p>Falls Sie an unserem Angebot interessiert sind, <Link to='/Kontakt'>kontaktieren</Link> Sie uns gerne. </p>
            </div>
        </div>
    </div >
}