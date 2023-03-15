import { iModal } from "../../pages/LandingPage";
import { Form } from "../Form/styled";
import { ModalStyled } from "./styled";


export function Modal({modalRegister, modalLogin, setModal}: iModal){

    return (
        <ModalStyled>
            <div className="div-modal">
                {modalLogin ? (
                    <>
                        <div className="div-title-close">
                            <h1>Login</h1>
                            <button onClick={() => setModal(false)}>X</button>
                        </div>
                        <Form>

                        </Form>
                    </>
                ):(
                    <>
                        <div className="div-title-close">
                            <h1>Cadastro</h1>
                            <button onClick={() => setModal(false)}>X</button>
                        </div>
                        <Form>

                        </Form>
                    </>
                )}
            </div>
        </ModalStyled>
    )
}