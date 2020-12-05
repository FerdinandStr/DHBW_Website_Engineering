import React from 'react'
import { FaShapes, FaLock, FaScroll, FaUserShield, FaTachometerAlt, FaMagic } from 'react-icons/fa'

import './style.css'

export default function MiniBlocks() {



    return <>
        <h1 className='BlockHeader'>Nutzen Sie unsere Vorteile!</h1>
        <div className='MiniBlocksContainer'>
            <div>
                <FaMagic className='MiniIcon' />
                <h2>Modern</h2>
                <p>Schluss mit dem ausgeben von Papier und Stift.</p>
                <p>Es muss lediglich der QR-Code gescannt und die benötigten Daten eintragen werden.</p>
            </div>
            <div>
                <FaShapes className='MiniIcon' />
                <h2>Simpel</h2>
                <p>Das intuitive Design vereinfacht und erleichtert die Bedienung.</p>
                <p>Nur ein Button ist nötig für die Abgabe der Daten.</p>
            </div>
            <div>
                <FaLock className='MiniIcon' />
                <h2>Sicher</h2>
                <p>Ihre Personenbezogengen Daten werden Verschlüsselt übetragen und auf Servern in Deutschland gespeichert.</p>
                <p>Der Zugriff ist nur mit einer gesicherten Verbindung vom Restaurantbetreiber möglich.</p>
            </div>
            <div>
                <FaScroll className='MiniIcon' />
                <h2>Vorschrifts&shy;gemäß</h2>
                <p>Die Datenerfassung hält sich an die Vorschriften nach der DSGVO.
                    So können Unbefugte keinen Zugriff auf die erhobenen Daten erhalten und auch die korrekte Datenvernichtung nach 4 Wochen ist gegeben. </p>
            </div>
            <div>
                <FaUserShield className='MiniIcon' />
                <h2>Vertrauens&shy;würdig</h2>
            </div>
            <div>
                <FaTachometerAlt className='MiniIcon' />
                <h2>Schnell</h2>
                <p>Durch die einfache Bedienung am eigenen Smartphone entstehen keine Wartezeiten und die Datenerfassung ist in wenigen Minuten erledigt.
Auch können die Daten direkt vom Restaurantbesitzer eingesehen werden.</p>
            </div>
        </div>
    </>
}