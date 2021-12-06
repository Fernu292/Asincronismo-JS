//Resolver peticion a una API de rick and morty con 
//Promesas

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const API = "https://rickandmortyapi.com/api/character/";

const fectchData = (url)=>{
    return new Promise ( (resolve, reject)=>{
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url, true);

        xhttp.onreadystatechange = (e) =>{

            if(xhttp.readyState === 4){

                //Validacion de estatus para ejecutar un callback
                (xhttp.status === 200)
                   ? resolve(JSON.parse(xhttp.responseText))
                   : reject( new Error('Error', url));
            }
        };

        xhttp.send();
    });
}

fectchData(API)
    .then(data => {
        console.log(data.info.count);
        return fectchData(`${API}${data.results[0].id}`)
    })
    .then( data =>{
        console.log(data.name);
        return fectchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.log(error));