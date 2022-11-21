import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Cardcircuits from './Cardcircuits'

export default function Topcircuits() {
  return (
    <div>
        <section class="pt-5 pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3 class="mb-3"> 📸 Los lugares más visitados </h3>
                    </div>

                    <div className="col-12">
                        <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                     <Cardcircuits />
                                     <Cardcircuits />
                                     <Cardcircuits />
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                    <div className="row">
                                    <Cardcircuits />
                                     <Cardcircuits />
                                     <Cardcircuits />
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                    <div className="row">
                                    <Cardcircuits />
                                     <Cardcircuits />
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <a class="btn btn-primary m-1 rounded-5" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                            <FaArrowLeft />
                        </a>
                        <a class="btn btn-primary m-1 rounded-5" href="#carouselExampleIndicators3" role="button" data-slide="next">
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>        
      
    </div>
  )
}
