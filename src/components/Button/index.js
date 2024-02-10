import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            <p>Buscar</p>
        </ButtonContainer>
    )
}

export default Button