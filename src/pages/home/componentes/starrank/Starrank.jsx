import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Resumeresults from './Resumeresults'
import { useEffect } from 'react'
import { useState } from 'react'
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../../../firebaseConfig/firebase'


export default function Starrank() { 
        // 1. configurar hooks
        const [items,setItems] =useState([])  //devuelve un valo con estado y una funcion para actualizarla
                
        //2. referencias ala db de firebase
        const itemsCollection = collection(db,"reseñas")

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


        // 6. usamos useeffects
        useEffect(() => {
        getItems()
        }, [])



       
  return (
    <div>
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="mb-3"> 🌟 Experiencias al 100% </h3>
                    </div>
                    <div className="col-12 "><Resumeresults/></div>
                    <div className="col-12 ">
                        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    
                                
                                        { items.map( (item) => (
                                            <div className="row">
                                            <div  className="col-md-4 col-sm-12 my-5  d-flex justify-content-center">
                                                <div className="card text-center" key={item.id}>
       
                                                <div className="circle-image">
                                                    <img src="https://i.imgur.com/hczKIze.jpg" width="50"/>
                                                </div>

                                                    <span className="dot"></span>

                                                <span className="name mb-1 fw-500">{item.Nombres}</span>
                                                <small className="text-black-50">Trujillo - La Libertad</small>
                                                <small className="text-black-50 font-weight-bold">{item.DNI}</small>



                                                <div className="location mt-4">

                                                    <span className="d-block">
                                                    <i className="fa fa-map-marker start"></i> 
                                                    <small className="text-truncate ml-2">{item.Comentarios}</small> 
                                                    </span>

                                                    <span>
                                                        <i className="fa fa-map-marker stop mt-2"></i> 
                                                        <small className="text-truncate ml-2">Muy buenas referencias </small> 
                                                        </span>
                                                    
                                                </div>

                                                <div className="rate bg-success py-3 text-white mt-3">

                                                    <h6 className="mb-0">Calificacion</h6>
                                                    <div className="buttons px-4 mt-0">

                                                    <button className="btn btn-warning btn-block rating-submit">Ver más</button>

                                                    </div>

                                                </div>
                                                

                                        </div>               
                                    
                                    </div>
                                    </div>        
                                            )) }


                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <a class="btn btn-primary m-1 rounded-5" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <FaArrowLeft />
                        </a>
                        <a class="btn btn-primary m-1 rounded-5" href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>        
      
    </div>
  )
}
