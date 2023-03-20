import React, { useEffect } from 'react'
import { useState } from 'react'

import {collection,getDocs} from 'firebase/firestore'
import {db} from '../../firebaseConfig/firebase'

import Swal from 'sweetalert2'


 const List = () => {
// 1. configurar hooks
const [products,setProducts] =useState([])  //devuelve un valo con estado y una funcion para actualizarla

//2. referencias ala db de firebase
const productsCollection = collection(db,"products")

//3. funcion para mostrar tdosos los doc



const getProducts = async () =>{
try {
 const data = await getDocs(productsCollection)
  let p = data.docs.map((doc) => ({...doc.data(), id:doc.id }));
  setProducts(p);
  console.log(p);

} catch (error) {
  console.log(error)
}

}


// 4. funcion para eliminar un doc


// 5. funcion de confirmacion para sweet alert 2

// 6. usamos useeffects
useEffect(() => {
  getProducts()
  //sdas
}, [])



  return (
    <div>List</div>
  )
}

export default List