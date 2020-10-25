
import './globalStyle.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './Layout.js'

ReactDOM.render(
    <div>
        <Layout />
    </div>,
    document.getElementById('root'))


if (import.meta.hot) {
    import.meta.hot.accept()
}