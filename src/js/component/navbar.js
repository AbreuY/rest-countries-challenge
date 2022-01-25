import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
		<div className="container-fluid shadow-sm rounded bg-white">
			<div className="container">
		<nav className="navbar navbar-white bg-white ">
			
				<span className="navbar-brand mb-0 h1 fw-bold">Where in the world?</span>
			<div className="ml-auto">
				<Link to="#">
					<button className="btn btn-white">Switch Theme</button>
				</Link>
			</div>
		</nav>
		</div>
		</div>
	);
};
