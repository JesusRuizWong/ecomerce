import { useState } from "react";
import'../../src/App.css'



const Git=()=>{

    const [search,setSearch]= useState("");
    const[user,setUser]=useState({}); 
    
    //funcion fetch
    const fecthUser = async()=>{
     try{    const response = await fetch (`https://api.github.com/users/${search}`)
        const data = await response.json();
          setUser(data)
     }catch(error){
         console-log("error"),error.message
     }
  }


  // es lo que se muestra en el navegador 
    return(
        <div className="App">
            <div className="container" >
                <h1>Buscador Github</h1>
                <div className="grid">
                    <input type="text" placeholder="ingresa usuarios"onChange={(e)=>setSearch(e.target.value)}
                    //  onKeyUp={fecthUser} 
                    onKeyPress={(e) => e.key === 'Enter' && fecthUser()} />
                     
                </div>
                <div>
                    <button role="button"  onClick={fecthUser}>Buscar</button>
                </div>
                <article>
                    <div>
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt="" />
                        <h4>{user.login}</h4>
                        <p>{user.bio}</p>
                        <h3>{user.company}</h3>
                    </div>
                </article>
            </div>
        </div>



    )

}

export default Git;