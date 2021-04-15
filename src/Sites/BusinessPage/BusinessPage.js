import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCMS } from '../../helper/restService'
import { cmsURL } from '../../helper/restService'
import './BusinessPageStyle.css'



export default function BusinessPage() {

    const [businessCards, setbusinessCards] = useState()

    useEffect((() => {
        getCMS('/business-cards')
            .then((data) => setbusinessCards(data))
            .catch((data) => console.log('ERROR', data))
    }), [])

    return <div className='defaultPageContainer bpc'>
        {businessCards
            ? businessCards.map((businessCard, counter) =>

                <div className='businessBlock'>
                    <img className={(counter == 0 ? "busIcons busCogoLogo" : counter % 2 == 0 ? "busIcons" : "busIcons flexAlignRight")} src={cmsURL + businessCard.img[0].url} />
                    <div className='businessTextContainer'>
                        <h2>{businessCard.title_de}</h2>
                        <p>{businessCard.content_de}</p>
                    </div>
                </div>
            )
            : null
        }
    </div>


}
