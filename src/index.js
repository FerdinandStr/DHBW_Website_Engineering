import { h, render } from 'preact'
import './index.css'

import App from './App.js'
// import X from './IntroButtonFancyShit'

render(
    <div>
        {/* <X testAttribute={'test213'} /> */}
        <App />

    </div>,
    document.getElementById('root'))