import React from 'react'
import Cardstarrank from './Cardstarrank'
import Resumeresults from './Resumeresults'


export default function Starrank() { 
 
  return (
    <div>
<section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Carousel cards title </h3>
            </div>
            <div  class="col-6"><Resumeresults /></div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12">
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
        </div>
    </div>
</section>
    </div>
  )
}
