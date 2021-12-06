
//Promesas para resolver problemas asincronos 

const miPromesa = ()=>{
    return new Promise( (resolve, reject) =>{
        if(true){
            resolve('Todo correcto');
        }else{
            reject('Ocurrio un error');
        }
    });
}

const miPromesa2 = ()=>{
    return new Promise( (resolve, reject) =>{
        if(true){
            setTimeout( ()=>{
                resolve('Todo cool');
            }, 3000);
        }else{
            //Buena practica para manejo de error 
            const error = new Error('whoops!');
            reject(error);
        }
    })
}

miPromesa()
    .then( response => console.log(response))
    .catch(error => console.log(error));

miPromesa2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Promesas encadenadad 

Promise.all( [miPromesa(), miPromesa2()])
    .then( response => console.log(response))
    .catch( error => console.log(error));
