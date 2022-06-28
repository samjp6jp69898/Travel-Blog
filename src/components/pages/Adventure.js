import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "./AdCard";
import "./Adventure.css";


export default function Adventure() {
  return (
    <div className="whole">
      <div className="adventure">
        
      </div>
     
      <div className="container">
        <Link to="/Mylove" style={{textDecoration: 'none'}}>
        <Card title="My love" src="mylove/img-5.jpg" />
        </Link>
        <Link to="/japan" style={{textDecoration: 'none'}}>
          <Card title="&nbsp;Japan" src="osaka/S__93749461.jpg" />
          </Link>
          <Link to="/taiwan" style={{textDecoration: 'none'}}>
          <Card title="Taiwan" src="Taiwan/16.jpg" />
          </Link>
          <Link to="/bff" style={{textDecoration: 'none'}}>
          <Card title="&nbsp;&nbsp;&nbsp;BFF" src="images/img-29.jpg" />
          </Link>
          <Link to="/usa" style={{textDecoration: 'none'}}>
          <Card title="&nbsp;&nbsp;&nbsp;USA" src="images/img-25.jpg" />
          </Link>
          
        </div>
       
    </div>
  );
}
