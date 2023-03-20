import React, { useEffect } from 'react'
import { useState } from 'react'
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../../firebaseConfig/firebase'

import Banner from '../../home/componentes/banner/Banner'
import { FaEdit, FaLink, FaChevronRight, FaComment, FaHome, FaHotel, FaTrash, FaDownload } from 'react-icons/fa';

import { ref, uploadBytes,getDownloadURL} from "firebase/storage"
import { v4 } from 'uuid'
import { async } from '@firebase/util'



const BannerContents = () => {
        // 1. configurar hooks
        const [items,setItems] =useState([])  //devuelve un valo con estado y una funcion para actualizarla
        
        //2. referencias ala db de firebase
        const itemsCollection = collection(db,"src")
        
        //3. funcion para mostrar tdosos los doc     
        const getItems = async () =>{
        try {
         const data = await getDocs(itemsCollection)
          let p = data.docs.map((doc) => ({...doc.data(), id:doc.id }));
          setItems(p);
          console.log(p);        
        } catch (error) {
          console.log(error)
        }       
        } 


        // 4. funcion para eliminar un doc
        const deleteItem = async (id) => {
          const itemDoc = doc(db, "src", id)
          await deleteDoc(itemDoc)
          getItems()
         }
        
        // 5. funcion de confirmacion para sweet alert 2
        

        // 6. Agregar nuevo item y capturar url de documento subido
        const [ description, setDescription ] = useState('') ; 
        const [ titulo, setTitulo ] = useState('') ; 
        const [ urlFile, setUrlFile ] = useState('') ; 
        const [file, setFile] = useState(null);
        const [fileRef, setFileRef] = useState(null);
        const ItemsCollection = collection(db, "src")
      
        const save = async (e) => {
          e.preventDefault() ;
          try {
              const urlFile = await  uploadFile(file)
              console.log(urlFile)
              setUrlFile(urlFile)
              await addDoc( ItemsCollection, { description: description, titulo: titulo ,urlFile: urlFile} )
              getItems()
          } catch(error) {console.error} ; 
        }
      
        //subir archivo y devolver url
        async function uploadFile(file){
          const storageRef= ref(storage, v4())
          await uploadBytes(storageRef, file)
          const url = await getDownloadURL(storageRef)
          return await url;
        
       }
       
      //mostrar imagen en vivo
        const handleInputChange = async(e) => {
          e.preventDefault();
          setFile(e.target.files[0]);
          setFileRef(URL.createObjectURL(e.target.files[0]));
          document.getElementById('renderimage').style.display = 'block';
        }
      
      //Editar Item
      

  
    const docEdit = async (id)=>{ 
      document.getElementById('keytitulo').innerHTML = 'Editar Item';
      document.getElementById('btnCreate').style.display = 'none';
      document.getElementById('btnEdit').style.display = 'block';
      const docSnap =   await getDoc( doc(db, "src", id) ) 
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setTitulo(docSnap.data().titulo)    
        setDescription(docSnap.data().description)    
        setUrlFile(docSnap.data().urlFile)    
        setFileRef(docSnap.data().urlFile)    
        document.getElementById('renderimage').style.display = 'block'; 
      }
      else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }}

    const update = async(id) => {
   
      const itemDoc = doc(db, "src", id)
      const item = {description: description, titulo: titulo ,urlFile: urlFile}
      await updateDoc(itemDoc, item)
   
  }

    const docCreate = () => {
  
      document.getElementById('keytitulo').innerHTML = 'Crear Nuevo Item';
      document.getElementById('renderimage').style.display = 'none';
      document.getElementById('btnEdit').style.display = 'none';
      document.getElementById('btnCreate').style.display = 'block';

      setTitulo("")
      setDescription("")
      setFile("")
      setFileRef("")
      setUrlFile("")

    }
   
  
   

  
   // 6. usamos useeffects
   useEffect(() => {
    getItems()
  }, [])
  

  return (
    <div className='row d-flex justify-content-center'>
        <Banner/>
    <div className='my-5 w-75 d-flex flex-wrap justify-content-center'>
      <div className='d-flex p-4 justify-content-between'>
        <h2 className='fs-5'>Mantenedor del Banner</h2>
        <button type="button" className="btn btn-primary" onClick={docCreate}  data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Agregar
        </button>
      </div>
      
      <table className=" table text-center">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='text-center'>
        { items.map( (item) => (
                <tr key={item.id}>
                  <td>{item.titulo}</td>
                  <td>{item.description}</td>
                  <td>
                  <button className="btn text-success" data-bs-toggle="modal"  onClick={() =>{  docEdit(item.id)}} data-bs-target="#exampleModal2"><FaEdit /></button> 
                  <button className="btn text-danger" onClick={ () => { deleteItem(item.id) } }><FaTrash /></button>

                  </td>
                </tr>                
              )) }
        </tbody>
      </table>




      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="keytitulo"></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form id="form">
                    <div className='mb-3'>
                        <label className='form-label'>Titulo</label>
                        <input
                            value={titulo} 
                            onChange={ (e) => setTitulo(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            value={description} 
                            onChange={ (e) => setDescription(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />
                    </div>  
                    <div className="mb-3 d-flex flex-wrap justify-content-center">
                        <input  type="file" className="form-control" 
                            onChange={handleInputChange}  required/>
                        <img className='my-4' id="renderimage"  alt="Image_Photo" src={fileRef}  style={{ height: "180px", width: "300px" , objectFit:"cover" , display:"none" }}/>
                    </div>  
                    <div className="modal-footer">
                <button  className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button id="btnCreate" onClick={save} className="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
                <button  id="btnEdit" onClick={update} className="btn btn-primary" data-bs-dismiss="modal">Editar</button>

            </div>
                 </form>   
            </div>

            </div>
        </div>
        </div>

        </div>
  
    </div>
  )
}

export default BannerContents