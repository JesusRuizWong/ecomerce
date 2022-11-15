//aqui estarán nuestros servicios
// cambio joel
//como parametro vamos a recurrir a la url
const BASE_URL="https://pokeapi.co/api/v2/pokemon?limit=200"

export const getDataFromPokemon = async (url=BASE_URL)=>{
    try{
    const response=await fetch(url) ;
    const data = await response.json();
    console.log("data",data);
    return data
} catch(error){ console.log(error.message)}
   
}