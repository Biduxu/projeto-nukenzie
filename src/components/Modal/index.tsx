import { useContext } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { UserContext } from "../../contexts/UserContext";
import { iModal } from "../../pages/LandingPage";
import { Form } from "../Form/styled";
import { Input } from "../Input";
import { ModalStyled } from "./styled";

interface iFormData{
    name?: string,
    email: string,
    password: string,
    confirmPassword?: string
}

export function Modal({ modalLogin, setModal, formSchema}: iModal){

    const { submitForm } = useContext(UserContext)
    
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
                                <Input placeholder="Digite seu Email" label="Email" type="text" register={register} toRegister="email"/>
                                <p className="error">{errors.email?.message}</p>
                            </div>
                            <div className="div-input-error">
                                <Input placeholder="Digite sua senha" label="Senha" type="password" register={register} toRegister="password"/>
                                <p className="error">{errors.password?.message}</p>
                            </div>
                            <button type="submit">
                                Login    
                            </button>                  
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
                                <Input placeholder="Digite seu nome" label="Nome" type="text" register={register} toRegister="name"/>
                                <p className="error">{errors.name?.message}</p>
                            </div>
                            <div className="div-input-error">
                                <Input placeholder="Digite seu email" label="Email" type="text" register={register} toRegister="email"/>
                                <p className="error">{errors.email?.message}</p>
                            </div> 
                            <div className="div-input-error">
                                <Input placeholder="Digite sua senha" label="Senha" type="password" register={register} toRegister="password"/>
                                <p className="error">{errors.password?.message}</p>
                            </div>
                            <div className="div-input-error">
                                <Input placeholder="Confirme sua senha" label="Confirme sua senha" type="password" register={register} toRegister="confirmPassword"/>
                                <p className="error">{errors.confirmPassword?.message}</p>
                            </div>
                            <button type="submit">
                                Cadastrar    
                            </button>      
                        </Form>
                    </>
                )}
            </div>
        </ModalStyled>
    )
}