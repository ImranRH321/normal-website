import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css'

const MeetBanner = () => {
    return (
        <div> 
           <div className="compani_banner">
               <h2>You are in good company</h2>
               <p><img src="https://d33wubrfki0l68.cloudfront.net/7509aa61812f7dcebcc012e78630ba405e9a6bfd/cffe1/assets/images/koskii.png" alt="" /></p>
               <p>Sameen Eajaz</p>
               <p>COO, Co-Founder, Koskii</p>
               <p>
               <i class="fas fa-star className=mx-4 text-warning"></i> 
               <i class="fas fa-star className=mx-4 text-warning"></i> 
               <i class="fas fa-star className=mx-4 text-warning"></i> 
               <i class="fas fa-star className=mx-4 text-warning"></i> 
               <i class="fas fa-star className=mx-4 text-warning"></i> 
               </p>
            <br />

            <h1>The app is exactly what we were looking for and has helped us add another sales channel very quickly.”</h1>
           </div>


            <div className="banner">
                <h2>Ready to meet your customers face to face?
                </h2>
                <br />
                <Button className="demo_btn" type="button" class="btn btn-danger">Danger</Button>
            </div>
        </div>
    );
};

export default MeetBanner;