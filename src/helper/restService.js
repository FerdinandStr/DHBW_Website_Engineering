import axios from 'axios'

const baseURL = 'https://wwi20-11.projekt.dhbw-heidenheim.de'
export const cmsURL = baseURL + '/api'

export function getCMS(apiPath, options) {

    return new Promise((resolve, reject) =>
        axios.get(cmsURL + apiPath)
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