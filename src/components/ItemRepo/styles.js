import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 14px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
    }

    a {
        color: cornflowerblue;
    }

    a.remover {
        color:#ff0000;
    }

    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
`;