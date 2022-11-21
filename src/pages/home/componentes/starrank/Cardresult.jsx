import React from 'react'
import { FaComment } from 'react-icons/fa'

export default function Cardresult() {
  return (
    <div class="card m-3">
        <div class="card-content">
            <div class="card-body">
                <div class="media d-flex">
                <div class="media-body text-left">
                    <h3 class="warning">156</h3>
                    <span>New Comments</span>
                </div>
                <div class="align-self-center">
                    <FaComment class="text-primary fs-1"/>
                </div>
                </div>
                <div class="progress mt-1 mb-0" >
                <div class="progress-bar bg-succes w-50"  role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div> 

  )
}
