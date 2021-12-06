//Resolver reto de llamado a una API con async y await


const API = 'https://rickandmortyapi.com/api/character/'

const fetchData = async(url)=>{

    try{
        const consulta = await fetch(url);
        const data = await consulta.json();

        const counter = await data.info.count;

        console.log(counter);

        const name = await data.results[0].name;
        const origen = await fetch(data.results[0].origin.url);

        const dimension = await origen.json().dimension;

        console.log(name, dimension);
    }catch(error){
        console.log(error);
    }
    

}

fetchData(API);