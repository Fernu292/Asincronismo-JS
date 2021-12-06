
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Hacer una peticion a una API de rick and morty 
//Atraves de callbacks

const API = 'https://rickandmortyapi.com/api/character/';

const FectchData = (url, callback)=>{

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    xhttp.onreadystatechange = (e) =>{

        if(xhttp.readyState === 4){

            //Validacion de estatus para ejecutar un callback
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error('Error'+url);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}

FectchData(API, (error1, data1)=>{
    //Validar errores
    if(error1) return console.error(error1);

    FectchData(API + data1.results[0].id, (error2, data2)=>{
        
        if(error2) return console.error(error2);

        FectchData(data2.origin.url, (error3, data3)=>{
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})

