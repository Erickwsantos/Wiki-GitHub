import React from 'react'

import { InputContainer } from './styles';

function Input({ value, onChange }) {
    return (
        <InputContainer value={value} onChange={onChange}>
            <input placeholder='Escreva seu nome de usuario GitHub '/>
            
        </InputContainer>
    )
}

export default Input