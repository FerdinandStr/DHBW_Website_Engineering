import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginStyle.css'

export default function LoginMask() {

    const [inputPassword, setInputPassword] = useState()
    const history = useHistory()

    function login() {
        let d = new Date()
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000))
        document.cookie = 'password=' + inputPassword + '; expires=' + d.toUTCString()
        history.push('/')
    }

    return <div className='LoginStyleDiv'>
        <input onChange={(e) => setInputPassword(e.target.value)} onKeyDown={(e) => {
            if (e.key == 'Enter') {
                login()
            }
        }} ></input>
        <button
            className='LoginButton'
            onClick={login}>
            LASS MICH REIN ALLA!
        </button >
    </div >
}