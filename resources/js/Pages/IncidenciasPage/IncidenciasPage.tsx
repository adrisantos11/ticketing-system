import * as ReactDOM from 'react-dom';
import * as React from 'react'
import { HashRouter, useHistory, Switch, Route } from "react-router-dom";
import './IncidenciasPage.scss'
import { ButtonModel, InputModel, DropdownModel, TabsModel } from '../../Model/model'
import Button from '../../Components/Button/Button';
import Tabs from '../../Components/Tabs/Tabs';
import CreateIncidenciaPage from './TabsOptions/CreateIncidenciaPage/CreateIncidenciaPage';
import MostrarIncidenciasPage from './TabsOptions/MostrarIncidenciasPage/MostrarIncidenciasPage';


const IncidenciasPage = () => {
    const history = useHistory();

    const [tabsOptions] = React.useState<TabsModel>({
        idList: ['mostrarIncidencias','crearIncidencia', 'ejemplo'],
        valuesList: ['Mostrar incidencias', 'Crear nueva incidencia', 'ejemplo'],
        color: '',
        enabledList: [true, true]
    });
    

    const handleClickTab = (id: string) => {
        if (id=='crearIncidencia') {
            history.push('/home/incidencias/create');
        } else if (id=='mostrarIncidencias') {
            history.push('/home/incidencias/show');
            
        }
    }

        return( 
            <div className="incidencias-container">
                <h1>Gestor de incidencias</h1>
                <p>En este apartado usted podrá gestionar todas las incidencias que hayan sido resportadas y asignadas.</p>
                <Tabs tabsInfo={tabsOptions} handleClick={handleClickTab}></Tabs>
                <div className="data-container">
                    <Switch>
                        <Route path="/home/incidencias/create" component={CreateIncidenciaPage}></Route>
                        <Route path="/home/incidencias/show" component={MostrarIncidenciasPage}></Route>
                    </Switch>
                </div>
            </div>
        )
}

export default IncidenciasPage;