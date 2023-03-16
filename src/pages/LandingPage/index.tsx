import { LandingPageStyled } from "./styled";
import imageLanding from "../../assets/Image-landing-page.png"
import { Button } from "../../components/Button";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { formSchemaLogin, formSchemaRegister } from "../../schemas/schemas";

export interface iModal{
    modalLogin: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    formSchema: any,
    openModal: (text: string) => void
}

export function LandingPage(){

    const [modal, setModal] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)
    
    const [formSchema, setFormSchema] = useState({})

    function openModal(text: string){
        if(text === 'Login'){
            setModalLogin(true)
            setModalRegister(false)
            setFormSchema(formSchemaLogin)
            setModal(true)
        }else{
            setModalRegister(true)
            setModalLogin(false)
            setFormSchema(formSchemaRegister)
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
                    <Button onClick={openModal} text="Cadastrar"/>
                </div>
            </div>
            {modal === true ? (
                <>
                    <Modal modalLogin={modalLogin} setModal={setModal} formSchema={formSchema} openModal={openModal}/>
                </>
            ):(
                <>

                </>
            )}
        </LandingPageStyled>
    )
    
}