import * as ReactDOM from 'react-dom';
import * as React from 'react'
import { HashRouter, useHistory, Switch, Route } from "react-router-dom";
import './MainPage.scss'

import { ButtonModel, InputModel, ToastModel } from '../../Model/model'
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar'

import { getProfile, logout } from '../../Utilities/Authentication'
import PerfilPage from "../PerfilPage/PerfilPage"
import IncidenciasPage from "../IncidenciasPage/IncidenciasPage"
import CalendarPage from "../CalendarPage/CalendarPage"
import CreateIncidenciaPage from "../IncidenciasPage/TabOptions/CreateIncidenciaPage/CreateIncidenciaPage"
import IncidenciaViewPage from "../IncidenciasPage/IncidenciaViewPage/IncidenciaViewPage"
import Toast from '../../Components/Toast/Toast';

const MainPage = () => {
    // $('#toastDelete').toast('hide');
    // $('#toastCreate').toast('hide');

    const history = useHistory();
    const [isLogged, setIsLogged] = React.useState(false);
    const [logoutButton, setLogoutButton] = React.useState<ButtonModel>({
        id: 1,
        texto: 'Cerrar Sesión',
        color: 'red',
        type: 'outline-secondary',
        icon: '',
        target_modal:'',
        extraClass: ''
    });

    const [userLogged, setUserLogged] = React.useState({
        name: '',
        surname1: '',
        surname2: '',
        exp: '',
        email: '',
        phone: '',
        role: ''
    });

    const [closeSlidebarButton, setCloseSlidebarButton] = React.useState<ButtonModel>({
        id: 1,
        texto: '',
        color: 'primary',
        type: 'outline-secondary',
        icon: 'fas fa-bars',
        target_modal:'',
        extraClass: ''
    });

    
    const [toastDeleteIncidencia] = React.useState<ToastModel>({
        id: 'toastDelete',
        title: 'Incidencia eliminada',
        description: 'La incidencia ha sido eliminada correctamente.',
        circleColor: '--red',
        delay: 4000
    });

    const [toastCreateIncidencia] = React.useState<ToastModel>({
        id: 'toastCreate',
        title: 'Incidencia creada',
        description: 'La incidencia se ha creado correctamente.',
        circleColor: '--blue',
        delay: 4000
    });

    
    const [toastIncidenciaChangeState] = React.useState<ToastModel>({
        id: 'toastIncidenciaStateChanged',
        title: 'Estado actualizado',
        description: 'El estado de la incidencia se ha cambiado y guardado correctamente.',
        circleColor: '--blue',
        delay: 4000
    });

    React.useEffect(() => {
        getProfile().then(res => {
            try {
                if(res) {
                    setIsLogged(true);
                    setUserLogged({
                        ...userLogged,
                        name: res.user.name,
                        surname1: res.user.surname1,
                        surname2: res.user.surname2,
                        exp: res.user.exp,
                        email: res.user.email,
                        phone: res.user.phone,
                        role: res.user.role
                    });
                } else
                    setIsLogged(false)
            } catch (error) {
                console.log(error);
            }
        })
    }, []);

    const handleClickOptions = (idOption: string) => {
        console.log(idOption);
    }

    if(isLogged) {
        return(
            <>
            <div className="mainpage-container">
                <Navbar handleClickOptions={handleClickOptions}></Navbar>
                <div className="body-container" id="body">
                    <Switch>
                        <Route path="/home/perfil" component={PerfilPage}></Route>
                        <Route path="/home/incidencias" component={IncidenciasPage}></Route>
                        <Route path="/home/calendario" component={CalendarPage}></Route>
                        <Route path="/home/disponibilidad-aulas" component={IncidenciasPage}></Route>
                        <Route path="/home/incidencia-view/:idIncidencia" component={IncidenciaViewPage}></Route>
                    </Switch>
                </div>
                <div className="toast-container">
                    <Toast toastProps={toastDeleteIncidencia}></Toast>
                    <Toast toastProps={toastCreateIncidencia}></Toast>
                    <Toast toastProps={toastIncidenciaChangeState}></Toast>
                </div>
            </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Tienes que iniciar sesión para poder acceder a esta página.</h1>
                <a href="/">Pagina de inicio</a>
            </>
        );
    }
}

export default MainPage;
