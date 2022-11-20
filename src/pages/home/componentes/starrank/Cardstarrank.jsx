import React from 'react'

export default function Cardstarrank() {
  return (
    <div  className="col-md-4 mt-5 mb-5 d-flex justify-content-center">
        <div className="card text-center">
                    <div className="circle-image">
                        <img src="https://i.imgur.com/hczKIze.jpg" width="50"/>
                    </div>

                        <span className="dot"></span>

                    <span className="name mb-1 fw-500">Bryan Williams</span>
                    <small className="text-black-50">Tata Ace</small>
                    <small className="text-black-50 font-weight-bold">QP09AA9090</small>



                    <div className="location mt-4">

                        <span className="d-block">
                        <i className="fa fa-map-marker start"></i> 
                        <small className="text-truncate ml-2">Ganesha Road, preet vihar new delhi</small> 
                        </span>

                        <span>
                            <i className="fa fa-map-marker stop mt-2"></i> 
                            <small className="text-truncate ml-2">Mandir Road, Mayur vihar, new delhi</small> 
                            </span>
                        
                    </div>


                    <div className="rate bg-success py-3 text-white mt-3">

                        <h6 className="mb-0">Rate your driver</h6>

                        <div className="rating"> 
                            <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label>
                            <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                            <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                            <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                            <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                        </div>


                        <div className="buttons px-4 mt-0">

                        <button className="btn btn-warning btn-block rating-submit">Submit</button>
                        
                    </div>
 
                </div>


        </div>               
       
    </div>
  )
}
