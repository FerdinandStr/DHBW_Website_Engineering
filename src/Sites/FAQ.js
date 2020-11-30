import React from 'react'
import GenericFoldingContainer from '../components/FoldingContainer/GenericFoldingContainer'
import './FAQ.css'

export default function FAQ() {



    return <div className='faqPage'>
        <h2>Häufig gestellte Fragen</h2>
        <GenericFoldingContainer headlineComponent={<h2>Warum werden diese Daten erhoben?</h2>}>
            <div className='content'>
                <p>In Zeiten von Corona ist es wichtig die Ansteckungszahl zu minimieren. Durch die Datenerhebung ist eine Kontaktverfolgung von Positiv getesteten Personen, die ein Restaurant besucht haben, möglich, um andere Gäste und das Gesundheitsamt schnellstmöglich über mögliche Ansteckungen zu Informieren. Darüber hinaus ist uns wichtig, dass der Restaurantbetrieb auch in ungewöhnlichen Zeiten, sicher fortgeführt werden kann. </p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Welche Daten werden benötigt ?</h2>}>
            <div className='content'>
                <p>Es werden nur die Notwendigsten Daten, wie Vor- und Nachname, Telefonnummer oder E-Mail-Adresse bzw. Anschrift einer Person je Hausstand, sowie die Komm- und Geh Zeiten, die im Falle einer Kontaktverfolgung eine sichere Erreichbarkeit ermöglichen,  benötigt.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Wie lange werden die Daten gespeichert? </h2>}>
            <div className='content'>
                <p>Die Daten werden für 4 Wochen gespeichert und anschließend automatisch gelöscht. Dies erfolgt nach den Gesetzlichen Vorgaben.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Ist die Datenübermittlung durch eine Ende-zu-Ende Verschlüsselung geschützt?</h2>}>
            <div className='content'>
                <p>Ja, wir halten uns streng an die rechtlichen Vorgaben und daher findet auch eine Ende-zu-Ende Verschlüsselung statt, um ihre Daten bestmöglich zu schützen.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Findet eine Datenweitergabe an Dritte statt?</h2>}>
            <div className='content'>
                <p>Die Daten werden für 4 Wochen gespeichert und anschließend automatisch gelöscht. Dies erfolgt nach den Gesetzlichen Vorgaben.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Wo werden die Daten gespeichert?</h2>}>
            <div className='content'>
                <p>Die Daten werden für die nötige Zeit von 4 Wochen verschlüsselt auf zertifizierten deutschen Servern gespeichert.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Werden meine Daten auf Richtigkeit geprüft?</h2>}>
            <div className='content'>
                <p>Die Daten werden von uns nicht auf Richtigkeit geprüft, aber das zuständige Lokal hat die Möglichkeit und ist auch in der Verantwortung die Daten seiner Gäste auf Richtigkeit zu prüfen.</p>
            </div>
        </GenericFoldingContainer>
        <GenericFoldingContainer headlineComponent={<h2>Welche Möglichkeiten habe ich nach einer Falscheingabe?</h2>}>
            <div className='content'>
                <p>Sie können Ihre Anmeldung selbst nochmal in der APP bearbeiten oder auch unseren Support kontaktieren. Bei Änderung wird Ihr zuständiges Lokal informiert, die eine Änderung nochmals überprüfen kann. Falls Sie das Lokal schon verlassen haben und Ihnen erst danach eine Falscheingabe aufgefallen ist, melden Sie sich bitte per Telefon, E-Mail oder per APP bei unserem Support oder dem zuständigen Restaurant.</p>
            </div>
        </GenericFoldingContainer>
    </div>
}