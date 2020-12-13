import React, { useState } from 'react'
import './CoGoMockupStyle.css'
import { AiFillPlusSquare, AiOutlineCloseSquare, AiOutlineQuestionCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export default function CoGoMockup() {

    const [personList, setPersonList] = useState([{ name: '', adresse: '', email: '' }])

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [timeStamp, setTimeStamp] = useState()
    const timeStampString = timeStamp ? timeStamp.getHours() + ':' + (timeStamp.getMinutes() < 10 ? '0' : '') + timeStamp.getMinutes() : null

    function onClose(idToRemove) {
        setPersonList(personList.filter((x, i) => i != idToRemove))
    }

    function onChangeValue(key, value, arrayId) {
        setPersonList(personList.map((el, i) => i == arrayId ? { ...el, [key]: value } : el))
    }

    return <div className='cogoMainCard flexBoxCenterColumn'>
        <img className='CoGoAppLogo' src='./CogoLogo.svg' />
        <p className='WillkommenHeader'>Willkommen!</p>

        <div className='inputContainer flexBoxCenterColumn'>
            <p>Bitte tragen Sie alle anwesenden Personen ein:</p>
            {
                personList.map((el, i) =>
                    <div className='PersonCard' key={i}>
                        {!isLoggedIn ? <AiOutlineCloseSquare className='cogoCloseIcon' onClick={() => onClose(i)} /> : null}
                        <p className='cogoLabel'>Name: </p><input className='cogoInput' value={el["name"]} onChange={(e) => onChangeValue("name", e.target.value, i)}></input>
                        <p className='cogoLabel'>Adresse: </p><input className='cogoInput' value={el["adress"]} onChange={(e) => onChangeValue("adress", e.target.value, i)}></input>
                        <p className='cogoLabel'>E-Mail: </p><input className='cogoInput' value={el["mail"]} onChange={(e) => onChangeValue("mail", e.target.value, i)}></input>
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
            ? <><p className='loggedInText'>Sie sind seit <span className='loggedInTime'>{timeStampString}</span> anwesend</p>
                <p className='loggedInTextInfo'>Vergessen Sie nicht beim Gehen auf Verlassen zu drücken!</p>
            </>
            : null}


        <Link className='cogoInfoLink' to="/datenschutz"><AiOutlineQuestionCircle twoToneColor='#eb2f96' /> Datenschutz</Link>
        <Link className='cogoInfoLink' to="/FAQ"><AiOutlineQuestionCircle /> FAQ</Link>

        {!isLoggedIn
            ? <button className='cogoButton startButton' onClick={() => {
                setTimeStamp(new Date())
                setIsLoggedIn(true)
            }}>Eintragen</button>

            : <button className='cogoButton stopButton' onClick={() => {
                setTimeStamp(null)
                setIsLoggedIn(false)
            }}> Verlassen</button>}

    </div >
}