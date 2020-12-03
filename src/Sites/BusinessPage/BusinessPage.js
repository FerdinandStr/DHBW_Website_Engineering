import React from 'react'
import './BusinessPageStyle.css'

export default function BusinessPage() {


    return <div className='defaultPageContainer'>
        <img src='./CogoLogo.svg' />
        <div className='businessTextContainer flexLeft'>
            <h2>Nutzen sie CoGo!</h2>
            <p>Corona trifft uns alle sehr hart. Besonders allerdings kleinere Unternehmen, wie z.B. Restaurants und Bars. Wir haben uns das Ziel gesetzt, diese schwierigen Umstände für die Gastronomie zu erleichtern. Sämtliche Vorgaben der Regierung, bezüglich Datenerfassung zur Kontaktverfolgung, übernehmen wir mit unserer App. Dabei müssen Ihre Kunden lediglich einen QR-Code scannen, denen wir Ihnen bereitstellen.</p>
        </div>

        <div className='businessTextContainer flexRight'>
            <h2>Höchster Sicherheitsstandard</h2>
            <p>Die Daten Ihrer Kunden werden durch unsere Software vertraulich aufgenommen, verschlüsselt und auf deutschen Servern gespeichert. Lediglich Sie als Betreiber haben die Möglichkeit die Kontaktdaten Ihrer Gäste einzusehen, um diese ggf. auf Ihre Richtigkeit überprüfen zu können. Eine Weitergabe an Dritte findet nicht statt. Nach den aktuellen Vorgaben werden die Daten Ihrer Kunden innerhalb von 4 Wochen automatisch gelöscht.</p>
        </div>

        <div className='businessTextContainer flexLeft'>
            <h2>Vollständig Automatisiert!</h2>
            <p>Durch die moderne und automatisierte Datenerfassungssoftware ist es uns möglich, einen positiven Corona-Fall, zu analysieren und die Kontaktpersonen zu identifizieren. Durch unsere App können wir die genauen An- und Abreisezeiten  erfassen und nur die Personen zu kontaktieren, die mit der infizierten Person anwesend waren.
            </p>
        </div>

        <div className='businessTextContainer flexLeft'>
            <h2>Kundenservice</h2>
            <p>//TODO Durch die moderne und automatisierte Datenerfassungssoftware ist es uns möglich, einen positiven Corona-Fall, zu analysieren und die Kontaktpersonen zu identifizieren. Durch unsere App können wir die genauen An- und Abreisezeiten  erfassen und nur die Personen zu kontaktieren, die mit der infizierten Person anwesend waren.
            </p>
        </div>

        <div className='businessTextContainer flexRight'>
            <h2>Unser Preis</h2>
            <p>Durch unsere Vollautomatische Software können wir unsere Preise sehr gering halten und verlangen nur Provision von 0,01 €/Kunde.
Durch den geringen Preis möchten wir vor allem Sie in den schwierigen Zeiten unterstützen.</p>
            <p>Falls sie an unserem Angebot interessiert sind, <a>kontaktieren</a> sie uns gerne. </p>
        </div>


    </div>
}