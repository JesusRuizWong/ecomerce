import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function Cardcircuits() {
  return (
   <div className="col-md-4 mt-5 mb-5 d-flex justify-content-center"> 
    <div class="profile-card-2">
        <img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg" class="img img-responsive"/>
        <div class="profile-name">JOHN DOE</div>
        <div class="profile-username">@johndoesurname</div>
         <ul class="profile-icons">
            <li class="list-inline-item m-0"><i ><FaStar /></i></li>
            <li class="list-inline-item m-0"><i ><FaStar /></i></li>
            <li class="list-inline-item m-0"><i ><FaStar /></i></li>
            <li class="list-inline-item m-0"><i ><FaStar /></i></li>
            <li class="list-inline-item m-0"><i ><FaStarHalfAlt /></i></li>
          </ul>
    </div>
    </div>



  )
}
