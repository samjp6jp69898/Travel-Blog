import React from "react";
import './Adventure.css'

function Card(props) {
    return (
        <div className="card-container">
            
            <div className="img-container">
            
                <img 
                className="card-img"
                src={props.src} alt=''>
                    
                </img>
                <h2 className="card-title">{props.title}</h2>
                
            </div>
           
        </div>
    )
}

export default Card;