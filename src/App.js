import React from 'react';

import Home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"

import {BrowserRouter, Route, Switch} from "react-router-dom";

import Layout from "./components/Layout.js"

function App(props) {
	// body...
 
		return (
			<BrowserRouter>
				<Layout>
				<Switch>

					<Route exact path="/" component={Home} />
					<Route component={NotFound} />

				</Switch>
				</Layout>
			</BrowserRouter>
		);
	
}

export default  App;
