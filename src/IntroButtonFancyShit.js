import { h } from 'preact'

import './IntroButtonStyle.css'

function IntroButtonDings(props) {

    const { testAttribute } = props

    return <div>
        <h1 className='header'>Header</h1>
        <p className='subText'>{testAttribute}</p>
    </div>
}

export default IntroButtonDings