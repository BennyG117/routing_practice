import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { styled } from "styled-components";


//component for word + color text + color background

const SayDecoration = () => {

    const {word, textColor, backColor} = useParams()

    const isNumber = isNaN(word)

    const Container = styled.div`
    background-color: ${backColor};
    color: ${textColor};
    `

    return (

//TODO: add syntax to allow textColor and backcolor to adjust the colors one the route is used.
    <Container>
        {/* change the text color based on the input for textColor */}
        {/* change the background color based on the input for backColor */}
        {isNumber ? (
            <div>
            The word is: {word}
        </div>
        ) : (
        <div>
            The number is: {word}
        </div>
        )}
    </Container>
  )
}

export default SayDecoration