import axios from 'axios'

const baseURL = 'https://wwi20-11.projekt.dhbw-heidenheim.de'
export const cmsURL = baseURL + '/api'

export function getCMS(apiPath, options) {
    const { withLocale } = options ? options : {}

    let getUrl = cmsURL + apiPath

    if (withLocale) {
        const browserLocale = navigator.language || navigator.userLanguage
        const locale = browserLocale.substring(0, 2) == 'en' ? 'en' : 'de'

        getUrl = getUrl + '?_locale=' + locale
    }

    console.log(withLocale, getUrl)

    return new Promise((resolve, reject) =>
        axios.get(getUrl)
            .then((resp) => {
                logger(resp)
                const data = resp.data

                resolve(data)
            })
            .catch((resp) => {
                logger(resp)

                const data = resp.data
                reject(data)
            })
    )
}

export function postCMS(apiPath, json, options) {
    return new Promise((resolve, reject) => {
        axios.post(cmsURL + apiPath, json)
            .then((resp) => {
                logger(resp)

                resolve(resp)
            })
            .catch(resp => {
                logger(resp)

                reject('ERROR!!!!!')
            })
    })
}

export function getCMSImgage(imgPath, options) {

    return cmsURL + imgPath
}

function logger(resp) {
    console.log('LOGGER:', resp)
}