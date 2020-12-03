import React from 'react'
import { FaShapes, FaLock, FaScroll, FaUserShield, FaTachometerAlt, FaMagic } from 'react-icons/fa'

import './style.css'

export default function MiniBlocks() {



    return <>
        <h1 className='BlockHeader'>Nutzen Sie unsere Vorteile!</h1>
        <div className='MiniBlocksContainer'>
            <div>
                <FaMagic className='MiniIcon' />
                <h3>Modern</h3>
                <p>Schluss mit dem ausgeben von Papier und Stift.</p>
                <p>Es muss lediglich der QR-Code gescannt und die benötigten Daten eintragen werden.</p>
            </div>
            <div>
                <FaShapes className='MiniIcon' />
                <h3>Simpel</h3>
                <p>Das intuitive Design vereinfacht und erleichtert die Bedienung.</p>
                <p>Nur ein Button ist nötig für die Abgabe der Daten.</p>
            </div>
            <div>
                <FaLock className='MiniIcon' />
                <h3>Sicher</h3>
            </div>
            <div>
                <FaScroll className='MiniIcon' />
                <h3>Vorschriftsgemäß</h3>
            </div>
            <div>
                <FaUserShield className='MiniIcon' />
                <h3>Vertrauenswürdig</h3>
            </div>
            <div>
                <FaTachometerAlt className='MiniIcon' />
                <h3>Schnell</h3>
            </div>
        </div>
    </>
}