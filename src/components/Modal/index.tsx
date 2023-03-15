import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { UserContext } from "../../contexts/UserContext";
import { iModal } from "../../pages/LandingPage";
import { formSchemaLogin, formSchemaRegister } from "../../schemas/schemas";
import { Form } from "../Form/styled";
import { Input } from "../Input";
import { ModalStyled } from "./styled";

interface iFormData{
    name?: string,
    email: string,
    password: string,
    confirmPassword?: string
}


export function Modal({modalRegister, modalLogin, setModal}: iModal){

    const { submitForm } = useContext(UserContext)

    const [formSchema, setFormSchema] = useState({})
    
    if(modalLogin){
        setFormSchema(formSchemaLogin)
    }else{
        setFormSchema(formSchemaRegister)
    }

    const {register, handleSubmit, formState: {errors}} = useForm<iFormData>({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    })

    return (
        <ModalStyled>
            <div className="div-modal">
                {modalLogin ? (
                    <>
                        <div className="div-title-close">
                            <h1>Login</h1>
                            <button onClick={() => setModal(false)}>X</button>
                        </div>
                        <Form onSubmit={handleSubmit(submitForm)}>
                            <div className="div-input-error">
                                
                            </div>                  
                        </Form>
                    </>
                ):(
                    <>
                        <div className="div-title-close">
                            <h1>Cadastro</h1>
                            <button onClick={() => setModal(false)}>X</button>
                        </div>
                        <Form onSubmit={handleSubmit(submitForm)}>
                            <div className="div-input-error">
                                    
                            </div>  
                        </Form>
                    </>
                )}
            </div>
        </ModalStyled>
    )
}