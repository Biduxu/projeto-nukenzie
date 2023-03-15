import { LandingPageStyled } from "./styled";
import imageLanding from "../../assets/Image-landing-page.png"
import { Button } from "../../components/Button";
import { useState } from "react";
import { Modal } from "../../components/Modal";

export interface iModal{
    modalRegister: boolean,
    modalLogin: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function LandingPage(){

    const [modal, setModal] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    function openModal(text: string){
        if(text === 'Login'){
            setModalLogin(true)
            setModalRegister(false)
            setModal(true)
        }else{
            setModalRegister(true)
            setModalLogin(false)
            setModal(true)
        }
    }

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
                    <Button onClick={openModal} text="Login"/>
                    <Button onClick={openModal} text="Cadastro"/>
                </div>
            </div>
            {modal === true ? (
                <>
                    <Modal modalRegister={modalRegister} modalLogin={modalLogin} setModal={setModal}/>
                </>
            ):(
                <>

                </>
            )}
        </LandingPageStyled>
    )
    
}