import React, { useEffect, useState } from 'react'
import { getCMS } from '../../helper/restService'
import { cmsURL } from '../../helper/restService'
import './BusinessPageStyle.css'
import ReactMarkdown from 'react-markdown'

export default function BusinessPage() {

    const [businessCards, setbusinessCards] = useState()
    useEffect((() => {
        getCMS('/business-cards', { withLocale: true })
            .then((data) => setbusinessCards(data))
            .catch((data) => console.log('ERROR', data))
    }), [])

    return <div className='defaultPageContainer bpc'>
        {businessCards ? businessCards.map((businessCard, i) =>
            <div key={businessCard.id} className='businessBlock'>
                <img loading='lazy' className={'busIcons ' + (i == 0 ? 'busCogoLogo' : i % 2 != 0 ? 'flexAlignRight' : null)} src={businessCard.img ? cmsURL + businessCard.img.url : null} />
                <div className='businessTextContainer'>
                    <h2>{businessCard.title}</h2>
                    <ReactMarkdown>{businessCard.content}</ReactMarkdown>
                </div>
            </div>
        ) : null}
    </div>
}