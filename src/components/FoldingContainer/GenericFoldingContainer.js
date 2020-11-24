import React, { useState } from 'react'
import './FoldingContainer.css'


//##################################################################################################################################################//
// => Use useFoldingContainerState if you need control over the FoldingContainer with external state e.g. close Folding container if search is pressed
// const [isOpen, changeOpen] = useFoldingContainerState()
// 
// <FoldingContainer isOpen={isOpen} changeOpen={changeOpen} headlineComponent={<h2>Hello World</h2>} /*maxHeight={"600px"}*/>
//     {component}
// </FoldingContainer>
//
// => if you don't need external state just use FoldingContainer without State
// <FoldingContainer headlineComponent={<h2>Hello World</h2>} /*maxHeight={"600px"}*/>
//     {component}
// </FoldingContainer>
//
// maxHeight is only needed if your child element gets larger than 500px (maxHight default=500px => this is needed for smooth opening and closing)
//##################################################################################################################################################//
export function useFoldingContainerState(initialState) {

    const [isOpen, setIsOpen] = useState(initialState === false ? false : true)

    function changeOpen(value) {
        value === true || value === false
            ? setIsOpen(value)
            : setIsOpen(isOpen => !isOpen)
    }
    return [isOpen, changeOpen]
}


export default function GenericFoldingContainer(props) {

    const { isOpen, changeOpen, headlineComponent, maxHeight, children } = props

    const [internalIsOpen, internalChangeOpen] = useFoldingContainerState(isOpen === false ? isOpen : true)

    function changeOpenState() {
        internalChangeOpen()
        changeOpen ? changeOpen() : null
    }

    //update internal State if external state exists and has changed
    if (isOpen === true || isOpen === false ? isOpen !== internalIsOpen : false) {
        internalChangeOpen(isOpen)
    }

    return (
        <div className='FoldingContainer' style={{ maxHeight: maxHeight }} id={internalIsOpen ? '' : 'ClosedContainer'} onClick={internalIsOpen ? null : () => changeOpenState()}>
            <div className='ContainerHeader'>
                <div className='HeadlineDiv'>{headlineComponent}</div>
                <div className='FoldingIconDiv'><button className='FoldingIcon' id={internalIsOpen ? 'ContainerIconOpen' : ''} onClick={!internalIsOpen ? null : () => changeOpenState()} >REIN!</button></div>
            </div>
            <div className='ContainerContent'>
                {children}
            </div>
        </div>
    )
}