import styled from "styled-components";

export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    label{
        color: var(--color-grey-4);
        font-size: var(--font-4);
        font-weight: var(--weight-4);
    }

    input{
        padding: 15px;
        border-radius: var(--radius-1);
        border: 2px solid var(--color-grey-2);
        color: var(--color-grey-4);
        font-size: var(--font-4);
    }

    input:focus{
        outline: 2px solid var(--color-grey-4);
    }
`