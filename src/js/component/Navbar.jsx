import React from "react";


const navlinks=["Home", "About", "Services", "Contact"]

const renderNavLinks = () => {

  return navlinks.map((navitem)=>{
    return (  <li>
      <a className="nav-link" href="#">{navitem}</a>
    </li>)
  })

}

const Navbar=()=>{

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
               </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto">
                    {renderNavLinks()}
                  </ul> 
              </div>
            </div>
           </nav>
  

}

export default Navbar;