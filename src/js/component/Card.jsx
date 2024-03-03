import React from "react";

const Card=(props)=>{

    return <div classNameName="col">
        <div className="card h-100" >
    <img src="https://commandcenter.sukoharjokab.go.id/peta/assets/frontend/img/our-office-8.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">{props.body}</p>
      </div>
      <div className="card-footer bg-transparent">
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
    </div>
  </div>
  
}




export default Card