import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CountriesCards } from "../component/CountriesCards";

export const Home = () => (
	<div className="container-fluid bg-light pt-4">
		<div className="container">
			<CountriesCards />
		</div>
	</div>
);
