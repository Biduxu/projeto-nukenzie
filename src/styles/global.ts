import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
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
    }

    button{
        cursor: pointer;
    }

`