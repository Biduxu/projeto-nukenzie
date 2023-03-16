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
        width: 40%;
        height: max-content;
        border-radius: var(--radius-1);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-title-close{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .close-modal{
        background-color: var(--color-grey-1);
        border: transparent;
        font-size: var(--font-3);
        font-weight: var(--weight-2);
        color: var(--color-grey-3);
    }

    .close-modal:hover{
        color: var(--color-grey-4);
    }

    .div-title-close h1{
        color: var(--color-grey-4);
    }

    .div-input-error{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .error{
        color: red;
        font-size: var(--font-7);
    }

    .to-register{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .button-modal{
        padding: 15px;
        font-size: var(--font-5);
        color: var(--color-grey-1);
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: var(--radius-1);
    }

    .button-modal:hover{
        background-color: var(--color-primary-2);
    }

    .to-register span{
        color: var(--color-grey-4);
        font-size: var(--font-6);
    }

    
`