import React, { useEffect, useState } from 'react'
import GenericFoldingContainer from '../components/FoldingContainer/GenericFoldingContainer'
import { getCMS } from '../helper/restService'
import './FAQ.css'
import ReactMarkdown from 'react-markdown'

export default function FAQ() {

    const [faqs, setFaqs] = useState()

    useEffect((() => {
        getCMS('/faqs', { withLocale: true })
            .then((data) => setFaqs(data))
            .catch((data) => console.log('ERROR', data))
    }), [])

    return <div className='defaultPageContainer faqPage'>
        <h1 className='BlockHeader'>Häufig gestellte Fragen</h1>
        {faqs
            ? faqs.map(faq =>
                <GenericFoldingContainer key={faq.id} headlineComponent={<h2>{faq.title_de}</h2>}>
                    <div className='content'>
                        <ReactMarkdown>{faq.content_de}</ReactMarkdown>
                    </div>
                </GenericFoldingContainer>
            )
            : null
        }
    </div>
}