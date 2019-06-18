import React, { Component } from 'react';

import airplaneLogo from "../images/airplane-globe.png"

import "./styles/Home.css"

import api from "../api.js";
import GravatarUrl from "../components/GravatarUrl.js"

import LeadForm from "../components/LeadForm.js"

import SuccessPage from "./SuccessPage.js"
import PageLoading from "./PageLoading.js"

const contactPhone = "https://api.whatsapp.com/send?phone=56946599356&text=quiero%20saber%20sobre%20tus%20importaciones%20chile"

class Home extends Component {


 	constructor(props) {

 		super(props);

 		this.state = {

		form:{

			email: "",
			firstName: "" ,
			jobTitle: "",
			lastName:"",
			twitter: "",
			avatarUrl: ""
		},
		loading: false,
		error: null,
		sent: false
		}

 	}


	handleInputChange = async (event) => {
	
		await this.setState({

			form: {
					...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value,

			avatarUrl: GravatarUrl(this.state.form.email)
			}	,

		});
	}

	handleFormSubmit = async (event) => {
			event.preventDefault()
			console.log("Form was submitted", this.state)

				this.setState({
					loading: true,
					error: null
				})

			try {
				await api.badges.create(this.state.form)
				this.setState({
					loading: false,
					sent: true
				})

			}

			catch(error) {
				this.setState({
					loading: false,
					error: error
				})
			}
	}




	render() {

		if(this.state.sent) {
			return <SuccessPage />
		}

		if(this.state.loading) {
			return <PageLoading />
		}

		return (
			<section className="Home">
			
				<section className="Home__hero">
				
					<figure>
						<img src={airplaneLogo} alt="Logo Platzi Conf" className="Home__hero-image" />						
					</figure>

					<h1 className="Home__Title">
					Maneja fácil <br /> los detalles <br /> de tu próxima <br /> importación
					</h1>

					<a href={contactPhone}
					 className="btn" 
					 target="_blank"
					  rel="noopener noreferrer">
						Escribenos
					</a>

				</section>
				
				<section className="Home__Icon-container">
				
						<LeadForm 
						title="Deja tus datos y te avisaremos"
						onChange={this.handleInputChange}
						onSubmit={this.handleFormSubmit}
						 />
				
				</section>
				
			</section>
		);
	}
}

export default Home;