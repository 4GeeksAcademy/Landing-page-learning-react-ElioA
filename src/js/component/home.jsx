import React from "react";

//include images into your bundle

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
				<Card body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
				<Card body="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
				<Card body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
				<Card body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
			</div>
			</div>
			<Footer/>
	</div>
};

export default Home;


