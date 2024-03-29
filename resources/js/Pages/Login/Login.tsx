import * as ReactDOM from 'react-dom';
import * as React from 'react'
//import history from '../../Utilities/createHistory';

import { ButtonModel, InputModel } from '../../Model/model'
import Button from '../../Components/Button/Button';
import { Input } from '../../Components/Input/Input';
import { login } from '../../Utilities/Authentication'
import './Login.scss'
import { HashRouter, useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [buttonInfo] = React.useState<ButtonModel>({
        id: 1,
        texto: 'Identifícate',
        color: 'primary',
        type: 'outline-primary',
        icon: 'fas fa-user',
        target_modal:'',
        extraClass: ''
    });

    const [inputUser, setInputUser] = React.useState<InputModel>({
        id: 1,
        value: '',
        label: 'ID',
        labelColor: 'white',
        placeholder: 'Ej: 25342783',
        color: 'primary',
        type: 'number',
        error_control_text: '',
        enabled: true,
        inputSize: '',
        isTextArea: false
    });

    const [inputPassword, setInputPassword] = React.useState<InputModel>({
        id: 2,
        value: '',
        label: 'Contraseña',
        placeholder: 'Contraseña',
        labelColor: 'white',
        color: 'primary',
        type: 'password',
        error_control_text: '',
        enabled: true,
        inputSize: '',
        isTextArea: false
    });
    


    const loginFunction = () => {
        if(inputUser.value == '' || inputPassword.value == '') {
            setInputUser({
                ...inputUser,
                color: 'red'
            });
            setInputPassword({
                ...inputPassword,
                error_control_text: 'Alguno de los campos está vacío',
                color: 'red'
            });

        } else {
            const user = {
                exp: inputUser.value,
                password: inputPassword.value
            }
            login(user).then(result => {
                if (result) {
                    const role = result.data.user_role;
                    if (role == 'technical' || role == 'supervisor') {
                        history.push('/home/incidencias/show');
                    } else if (role == 'admin') {
                        history.push('home/admin');
                    } else if (role == 'visitor') {
                        history.push('home/visitor');
                    }
                } else {
                    setInputUser({
                        ...inputUser,
                        color: 'red'
                    });
                    setInputPassword({
                        ...inputPassword,
                        error_control_text: 'Los datos introducidos no coinciden',
                        color: 'red'
                    });
                }
            });
        }
    }

    const handleClickButton = () => {
        loginFunction();
    }

    const keyPressEvent = (event: any) => {
        if(event.keyCode === 13) {  
            event.preventDefault();
            loginFunction();
        }
    }

    const handleChangeInput = (value: string, id: number) => {
        if (id == 1) {
            setInputUser({
                ...inputUser,
                value: value
            })
            // setUserData({
            //     ...userData,
            //     exp: value
            // })
        } else if (id == 2) {
            setInputPassword({
                ...inputPassword,
                value: value
            })
            // setUserData({
            //     ...userData,
            //     password: value
            // })
        }
    }

    // React.useEffect(() => {
    //     document.addEventListener("keydown", keyPressEvent, false);
    
    //     return () => {
    //       document.removeEventListener("keydown", keyPressEvent, false);
    //     };
    //   }, []);


    return(
        <>
        <div className="login-main">
            <div className="login">
                <div className="centered_container centered_container--description">
                    <p className="login_title">
                        TICKETCLASS
                    </p>
                    <div className="description_text">
                        <p>¡Bienvenido a <b>TICKETCLASS</b>!</p>
                        <p> Explora y usa esta herramienta para la gestión de las incidencias dentro de tu entorno de trabajo.</p>
                        <p> Consigue una mayor rapidez de respuesta.</p>
                    </div>
                    <div className="icons-container">
                        <a><i className="far fa-envelope-open"></i></a>
                        <a><i className="fas fa-phone"></i></a>
                    </div>
                </div>
                <div className="centered_container centered_container--login">
                    <p className="login_title">
                        Iniciar sesion
                    </p>
                    <div className="inputs_container">
                        <Input inputInfo={inputUser} handleChangeInput={handleChangeInput}></Input>
                        <Input inputInfo={inputPassword} handleChangeInput={handleChangeInput}></Input>
                    </div>
                    <Button buttonInfo={buttonInfo} handleClick={handleClickButton}></Button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;