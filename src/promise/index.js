
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

miPromesa()
    .then( response => console.log(response))
    .catch(error => console.log(error));