import React, { useState } from 'react'
import './CoGoMockupStyle.css'
import { AiFillPlusSquare, AiOutlineCloseSquare, AiOutlineQuestionCircle } from 'react-icons/ai'


export default function CoGoMockup() {

    const [personList, setPersonList] = useState([{ name: '', adresse: '', email: '' }])



    return <div className='cogoMainCard flexBoxCenterColumn'>
        <img className='CoGoAppLogo' src='./CogoLogo.svg' />
        <p className='WillkommenHeader'>Willkommen!</p>


        <div className='inputContainer flexBoxCenterColumn'>
            <p>Bitte tragen Sie alle anwesenden Personen ein:</p>
            {
                personList.map((el, i) =>
                    <div className='PersonCard' key={i}>
                        <AiOutlineCloseSquare className='cogoCloseIcon' />
                        <p className='cogoLabel'>Name: </p><input className='cogoInput' ></input>
                        <p className='cogoLabel'>Adresse: </p><input className='cogoInput' ></input>
                        <p className='cogoLabel'>E-Mail: </p><input className='cogoInput' ></input>
                    </div>
                )
            }
            <div className='flexBoxCenterColumn addPerson'>
                <p>Weitere Person</p>
                <AiFillPlusSquare className='cogoAddIcon' onClick={() => setPersonList([...personList, {}])} />
            </div>

        </div>
        <a className='cogoInfoLink'><AiOutlineQuestionCircle twoToneColor='#eb2f96' /> Infos Datenschutz</a>
        <a className='cogoInfoLink'><AiOutlineQuestionCircle /> Infos zu welchen Angaben Sie verpflichtet sind</a>

        <button className='cogoStartButton' >Eintragen</button>

    </div >
}