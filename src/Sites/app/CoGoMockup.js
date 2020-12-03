import React, { useEffect, useState } from 'react'
import './CoGoMockupStyle.css'
import { AiFillPlusSquare, AiOutlineCloseSquare, AiOutlineQuestionCircle } from 'react-icons/ai'


export default function CoGoMockup() {

    const [personList, setPersonList] = useState([{ name: '', adresse: '', email: '' }])

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // const [timer, setTimer] = useState(0)
    const [timeStamp, setTimeStamp] = useState()
    //5 sekunden timer
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimer(value => ++value)
    //     }, 1000)
    //     return () => clearInterval(timer)
    // }, [])

    return <div className='cogoMainCard flexBoxCenterColumn'>
        <img className='CoGoAppLogo' src='./CogoLogo.svg' />
        <p className='WillkommenHeader'>Willkommen!</p>

        <div className='inputContainer flexBoxCenterColumn'>
            <p>Bitte tragen Sie alle anwesenden Personen ein:</p>
            {
                personList.map((el, i) =>
                    <div className='PersonCard' key={i}>
                        {!isLoggedIn ? <AiOutlineCloseSquare className='cogoCloseIcon' /> : null}
                        <p className='cogoLabel'>Name: </p><input className='cogoInput' ></input>
                        <p className='cogoLabel'>Adresse: </p><input className='cogoInput' ></input>
                        <p className='cogoLabel'>E-Mail: </p><input className='cogoInput' ></input>
                    </div>
                )
            }
            {!isLoggedIn
                ? <div className='flexBoxCenterColumn addPerson'>
                    <p>Weitere Person</p>
                    <AiFillPlusSquare className='cogoAddIcon' onClick={() => setPersonList([...personList, {}])} />
                </div>
                : null}
            {isLoggedIn
                ? <div></div>
                : null}
        </div>

        {timeStamp
            ? <><p className='loggedInText'>Sie sind seit <span className='loggedInTime'>18:15</span> anwesend</p>
                {/* {timeStamp.getHours() + ':' + timeStamp.getMinutes()} */}
                <p className='loggedInTextInfo'>Vergessen Sie nicht beim Gehen auf Verlassen zu drücken!</p>
            </>
            : null}


        <a className='cogoInfoLink'><AiOutlineQuestionCircle twoToneColor='#eb2f96' /> Datenschutz</a>
        <a className='cogoInfoLink'><AiOutlineQuestionCircle /> FAQ</a>

        {!isLoggedIn
            ? <button className='cogoButton startButton' onClick={() => {
                setTimeStamp(new Date())
                setIsLoggedIn(true)
            }}>Eintragen</button>

            : <button className='cogoButton stopButton'> Verlassen</button>}

    </div >
}