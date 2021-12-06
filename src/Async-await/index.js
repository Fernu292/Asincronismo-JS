
//Funciones asincronas con async y await 
//Las funciones async siempre retornan una promesa 
//Sin embargo permiten resolver promesas dentro de ellas de 
//manera eficiente


const unaPromesa = ()=>{
    return new Promise ( (resolve, reject)=>{
        (true)
            ? setTimeout( ()=> resolve('Do something Async'), 3000)
            : reject( new Error ('Test Error'))
    });
}

const unaFuncAsync = async ()=>{
    const respuesta = await unaPromesa();

    console.log(respuesta);
}


const anotherFunction = async () =>{
    try{
        const asynFunc = await unaFuncAsync();
        console.log(asynFunc);
    }catch(error){
        console.error(error);
    }
}

unaFuncAsync();
anotherFunction();