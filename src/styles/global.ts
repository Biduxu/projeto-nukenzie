import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root{
        --color-primary: #fd377e;
        --color-primary-2: #e34981;
        --color-secundary: #03b898;

        --color-grey-1: #f8f9fa;
        --color-grey-2: #e9ecef;
        --color-grey-3: #868e96;
        --color-grey-4: #212529;

        --font-1: 38px;
        --font-2: 28px;
        --font-3: 22px;
        --font-5: 16px;
        --font-6: 12px;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 5px;

    }

    button{
        cursor: pointer;
    }

    body{
        position: relative;
        font-family: 'Nunito', sans-serif;
    }

`