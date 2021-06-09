import React, { useEffect, useState } from 'react'
import './Kontakt.css'
import { AiFillHome, AiFillClockCircle, AiFillPhone } from 'react-icons/ai'
const reactIcons = { AiFillHome, AiFillClockCircle, AiFillPhone }
import { cmsURL, getCMS } from '../helper/restService'
import ReactMarkdown from 'react-markdown'

export default function Kontakt() {

    const [kontaktData, setKontaktData] = useState()
    useEffect((() => {
        getCMS('/kontakt')
            .then((data) => setKontaktData(data))
            .catch((data) => console.log('ERROR', data))
    }), [])

    return <div className='defaultPageContainer kontaktPageContainer'>
        <h1 className='BlockHeader'>{kontaktData ? kontaktData.Header1 : null}</h1>
        <div className='IconContainerKontakt'>
            {
                kontaktData
                    ? kontaktData.InfoBlock.map(infoContent => {
                        //ICON NEEDS TO BE ADDED MANUALLY TO LIST//
                        const Icon = reactIcons[infoContent.reactIconID]

                        return <div className='KontaktBlock' key={infoContent.id}>
                            <Icon size={100} />
                            <h3>{infoContent.header}</h3>
                            <ReactMarkdown>{infoContent.content}</ReactMarkdown>
                        </div>
                    })
                    : null
            }
        </div>
        <h1 className='BlockHeader'>{kontaktData ? kontaktData.HeaderTeam : null}</h1>
        <div className='BitmojiContainerKontakt'>
            {
                kontaktData
                    ? kontaktData.PersonBlock.map(personContent =>
                        <div className='BitmojiIconcontainer' key={personContent.id}>
                            <img loading='lazy' className='rund' src={personContent.image ? cmsURL + personContent.image.url : null} />
                            <h4>{personContent.name}</h4>
                            <h5>{personContent.title}</h5>
                            <p>{personContent.slogan}</p>
                        </div>
                    )
                    : null
            }
        </div>
    </div >
}