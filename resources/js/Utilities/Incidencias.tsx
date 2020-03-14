import axios from 'axios';

export const getAllIncidencias = (user: any) => {
    return axios
    .post('api/incidencias', {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => { 
        console.log(res);
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




