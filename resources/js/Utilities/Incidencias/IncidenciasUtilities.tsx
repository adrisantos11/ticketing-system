import axios from 'axios';

export const getAllIncidencias = (user: any) => {
    return axios
    .post('api/incidencias', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        return res;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const getIncidenciasAssignedToUser = (user: any) => {
    return axios
    .post('api/incidencias/assignedTo',{
        id: user.id
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const getIncideniciaUnique = (id: number) => {
    return axios
    .post('api/incidencias/getIncidencia',{
        id: id
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}


export const getIncidenciaAssginedNames = (id: number) => {
    return axios
    .post('api/incidencias/getAssignedNames',{
        id: id
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const createIncidencia = (newIncidencia: any) => {
    return axios
    .post('api/incidencias/create', newIncidencia, {
        headers: {'Content-Type': 'application/json'}
    })
    .catch(err => {
        console.log(err);
    })
}

export const editIncidencia = (incidencia: any) => {
    console.log(incidencia);
    return axios
    .post('api/incidencias/edit', incidencia, {
        headers: {'Content-Type': 'application/json'}
    })
    .catch(err => {
        console.log(err);
    })
}

export const deleteIncidencia = (id: number) => {
    console.log(id);
    return axios
    .post('api/incidencias/remove', {id}, {
        headers: {'Content-Type': 'application/json'}
    })
    .catch(err => {
        console.log(err);
    })
}

export const getFilters = () => {
    return axios
    .get('json/filtro_mostrarIncidenciasPage.json')
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    });
}

export const getIncidencias = (id_user: number, userRol: string, orderBy: string) => {
    console.log('api/incidencias/'+userRol+'/getIncidencias/'+ orderBy);
    console.log('User ID: ' + id_user)
    return axios
    .post('api/incidencias/'+userRol+'/getIncidencias/'+ orderBy,{
        id: id_user
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const getFilteredIncidencias = (userId: number, userRol: string, idDropdown: string, idSelectboxList: string[]) => {
    return axios
    .post('api/incidencias/'+userRol+'/filtered', {
        userId: userId,
        idDropdown: idDropdown,
        idSelectboxList: idSelectboxList
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const updateStateIncidencia = (idIncidencia: number, newState: string, resolutionDate?: string) => {
    console.log(resolutionDate);
    return axios
    .post('api/incidencias/updateState', {
        id: idIncidencia,
        newState: newState,
        resolutionDate: resolutionDate
    }, {
        headers: {'Content-Type': 'application/json'}
    })
    .catch(err => {
        console.log(err);
    })
}

export const getCommentsIncidencia = (idIncidencia: number) => {
    return axios
    .post('api/incidencias/getComments', {
        idIncidencia: idIncidencia
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}

export const saveCommentIncidencia = (userId: number, incidenciaId: number, text: string, date: string, urlData: string) => {
    return axios
    .post('api/incidencias/createComment', {
        userId: userId,
        incidenciaId: incidenciaId,
        text: text,
        date: date,
        urlData: urlData
    }, {
        headers: {'Content-Type': 'application/json'}
    })
    .catch(err => {
        console.log(err);
    })
}

export const getEmailsUsersComments = (idIncidencia: number) => {
    return axios
    .post('api/incidencias/getUserEmailsFromIncidenciaComment', {
        idIncidencia: idIncidencia
    },
    {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        if(err.response) {
            console.log(err.response.data.error);
            console.log(err.response.status);
        } else if (err.request) {
            console.log(err.request);
            
        } else
            console.log(err);
    })
}