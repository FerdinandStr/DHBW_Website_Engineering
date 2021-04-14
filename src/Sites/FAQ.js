import React, { useEffect, useState } from 'react'
import GenericFoldingContainer from '../components/FoldingContainer/GenericFoldingContainer'
import { getCMS } from '../helper/restService'
import './FAQ.css'

export default function FAQ() {

    const [faqs, setFaqs] = useState()

    useEffect((() => {
        getCMS("faqs")
            .then((data) => setFaqs(data))
            .catch((data) => console.log("ERROR", data))
    }), [])

    return <div className='defaultPageContainer faqPage'>
        <h1 className='BlockHeader'>Häufig gestellte Fragen</h1>
        {faqs
            ? faqs.map(faq =>
                <GenericFoldingContainer headlineComponent={<h2>{faq.title_de}</h2>}>
                    <div className='content'>
                        <p>{faq.content_de}</p>
                    </div>
                </GenericFoldingContainer>
            )
            : null
        }
    </div>
}