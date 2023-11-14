import styled, { css } from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;

    @media (max-width: 500px){
        grid-template-columns: 1fr;
    }

    .snack{
        position: relative;
        background: ${({theme}) => theme.colors.black};
        padding: 1.75rem;
        border-radius: 4px;
    }

    h2{
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
    }

    img{
        object-fit: cover;
        width: 100%;
        height: 11.25rem;
        border-radius: 4px;
        margin-bottom: 0.375rem;
    }

`
