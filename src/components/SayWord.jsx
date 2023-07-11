import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { styled } from "styled-components";


//component for say word or number into 1 jsx
//uses isNaN methodd*


const SayWord = () => {

const {word} = useParams()

const isNumber = isNaN(word)

    return (
    

    <div>
        {isNumber ? (
            <div>
            {/* is a word? if yes, do this display */}
            The word is: {word}
        </div>
        ) : (
        <div>
            {/* is a number? if yes, do this display */}
            The number is: {word}
        </div>
        )}
    </div>
  )
}

export default SayWord