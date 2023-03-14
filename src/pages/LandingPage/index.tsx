import { LandingPageStyled } from "./styled";
import imageLanding from "../../assets/Image-landing-page.png"
import { Button } from "../../components/Button";


export function LandingPage(){

    return (
        <LandingPageStyled>
            <div className="image-landing">
                <img src={imageLanding} alt=""/>
            </div>
            <div className="div-content-buttons">
                <div className="div-content">
                    <h2><span>Nu</span> Kenzie</h2>
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>de forma rápida e segura</p>
                </div>
                <div className="div-buttons">
                    <Button text="Login"/>
                    <Button text="Cadastro"/>
                </div>
            </div>
        </LandingPageStyled>
    )
    
}