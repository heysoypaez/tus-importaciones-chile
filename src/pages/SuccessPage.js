
import React from "react";
import "./styles/SuccessPage.css";
import SuccessImage from "../images/checked.svg";


function SuccessPage(props) {
	
	return(
		<section className="SuccessPage">
			<figure>
				<img src={SuccessImage} alt="SuccessPage" className="SuccessPage__icon" />
			</figure>
			<h1 className="SuccessPage__title">¡Genial! Cuidaremos tus datos</h1>
		</section>
	)
}

export default SuccessPage;


