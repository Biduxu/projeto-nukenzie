import styled from "styled-components";

export const LandingPageStyled = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--color-grey-4);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 150px;

    .div-content-buttons{
        display: flex;
        flex-direction: column;
        gap: 40px;
        max-width: 350px;
    }

    .div-content{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-content h2{
        font-size: var(--font-2);
        font-weight: var(--weight-1);
        color: var(--color-grey-1);
    }

    span{
        color: var(--color-primary);
    }

    p{
        color: var(--color-grey-1);
    }

    h1{
        font-size: var(--font-1);
        font-weight: var(--weight-1);
        color: var(--color-grey-1);
    }

    .div-buttons{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`