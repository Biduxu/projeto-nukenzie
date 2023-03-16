import styled from "styled-components";

export const ButtonStyled = styled.button`
    height: 40px;
    width: 100%;
    background-color: var(--color-primary);
    color: var(--color-grey-1);
    font-size: var(--font-4);
    font-weight: var(--weight-3);
    font-family: 'Nunito', sans-serif;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-1);

    :hover{
        background-color: var(--color-primary-2);
    }
`