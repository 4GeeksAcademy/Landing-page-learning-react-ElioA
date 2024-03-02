import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"
import Jumbo from "./Jumbo"
import Card from "./Card"
import Footer from "./footer"

//create your first component
const Home = () => {
	return <div>
		<Navbar/>
		<div className="container" style={{marginTop:"20px"}}>
			<Jumbo/>
			<div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"20px", marginBottom:"100px"}}>
				<Card/><Card/><Card/><Card/>
			</div>
			</div>
			<Footer/>
	</div>
};

export default Home;


