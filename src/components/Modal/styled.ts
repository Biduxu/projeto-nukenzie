import styled from "styled-components";

export const ModalStyled = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .div-modal{
        background-color: var(--color-grey-1);
        padding: 20px;
        width: 50%;
        height: max-content;
        border-radius: var(--radius-1);
    }

    .div-title-close{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .div-title-close h1{
        color: var(--color-grey-4);
    }

    
`