import { ButtonStyled } from "./styled";


export function Button({text, onClick}: any){

    return (
        <ButtonStyled onClick={() => {onClick(text)}}>
            {text}
        </ButtonStyled>
    )
}