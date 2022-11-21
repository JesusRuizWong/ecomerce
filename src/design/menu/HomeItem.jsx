import React from 'react'
import { FaHome } from 'react-icons/fa'

export default function HomeItem() {
  return (
    <div >
        <h2 className="mx-2"> Home</h2> 
         <div className="d-flex flex-wrap justify-content-center" > 
                        <div class="card p-4 m-3 text-center shadow-none ">
                            <blockquote class="blockquote mb-0">
                              <FaHome className="fs-1 bg-primary rounded-circle p-1 "/>  
                              <p>Reseñas</p>
                            </blockquote>
                        </div>

                        <div class="card p-4 m-3 text-center shadow-none ">
                            <blockquote class="blockquote mb-0">
                              <FaHome className="fs-1 bg-primary rounded-circle p-1 "/>  
                              <p>Reseñas</p>
                            </blockquote>
                        </div> 

                </div>         
    </div>
  )
}
