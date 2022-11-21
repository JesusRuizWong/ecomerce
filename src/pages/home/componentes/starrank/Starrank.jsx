import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Cardstarrank from './Cardstarrank'
import Resumeresults from './Resumeresults'


export default function Starrank() { 



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
                                    <div className="row">
                                     <Cardstarrank />
                                     <Cardstarrank />
                                     <Cardstarrank />
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                    <div className="row">
                                     <Cardstarrank />
                                     <Cardstarrank />
                                     <Cardstarrank />
                                    </div>
                                </div>

                                <div className="carousel-item ">
                                    <div className="row">
                                     <Cardstarrank />
                                     <Cardstarrank />
                                     <Cardstarrank />
                                    </div>
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
