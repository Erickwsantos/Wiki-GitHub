import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;

    min-height: 62px;
    width: 80%;

    margin: 20px;

    display: flex;
    input {
        background: transparent;
        border-radius: 20px;
        border: none;
        width: 90%;
        min-height: 100%;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 14px;
        &:focus{
            outline: none;
        }
    }
`;