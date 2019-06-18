import React, { Component } from 'react';
import "./styles/BadgeForm.css";

class BadgeForm extends Component {


	render() {



		return (
			<section className="BadgeForm">

				<h1>{this.props.title}</h1>
				<form onSubmit={this.props.onSubmit}>

					<label htmlFor="firstName">Nombre</label>
					<input 
						onChange={this.props.onChange}
						type="text" 
						name="firstName" 
						value={this.props.firstName}
					/>

					
					<label htmlFor="email">Email</label>
					<input 
						onChange={this.props.onChange}
						type="email" 
						name="email" 
						value={this.props.email}
					/>

					<input
					 className="BadgeForm__submit"
					 type="submit"
					 value="¡Enviar!" 
					 onClick={this.props.onClick} 
					/>
					 
					{this.props.error && (

							<p>{this.props.error.message}</p>

						)

					} 

				</form>

			</section>
		);
	}

}

export default BadgeForm;