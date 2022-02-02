import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slick.css';
import English from "./EnglishImg.png";
import Hindi from "./HindiImg.png";
import Maths from "./MathsImg.png";
function Slick() {
   const settings = { 
       dot:true,
       speed: 500,
       infinite:true,
       slidesToShow:3,
       slidesToScroll: 1,
       cssEase: "linear"

}
    return (
       
        <Slider{...settings}>
        <div className="card_wrapper">
            <div className="card">
               <div className="card_image">
                   <center><img src={English} alt=""/></center>
                </div>
                
                <div className="details">
                <center><h2>English</h2></center>
                </div>
            </div>
        </div>
        <div className="card_wrapper">
        <div className="card">
           <div className="card_image">
               <center><img src={Hindi} alt=""/></center>
            </div>
            
            <div className="details">
            <center><h2>Hindi</h2></center>
            </div>
        </div>
    </div>
    <div className="card_wrapper">
    <div className="card">
       <div className="card_image">
       <center><img src={Maths} alt=""/></center>
        </div>   
        <div className="details">
        <center><h2>Maths</h2></center>
        </div>
    </div>
</div>
 <div className="card_wrapper">
 <div className="card">
    <div className="card_image">
    <center><img src={English} alt=""/></center>
     </div>
     
     <div className="details">
         <center><h2>General Knowledge</h2></center>
     </div>
 </div>
</div>
<div className="card_wrapper">
<div className="card">
<div className="card_image">
<center><img src={Hindi} alt=""/></center>
 </div>
 
 <div className="details">
     <center><h2>Computer</h2></center>
 </div>
</div>
</div>
 <div className="card_wrapper">
 <div className="card">
    <div className="card_image">
    <center><img src={English} alt=""/></center>
     </div>   
     <div className="details">
     <center><h2>EVS</h2></center>
     </div>
 </div>
</div>
        </Slider>
    )
}

export default Slick;
