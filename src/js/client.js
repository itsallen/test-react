import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router"


import Layout from "./components/Layout";
import Featured from "./components/Featured";


import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component="{Featured}"> </IndexRoute>

			<Route path="/" component={AboutUs}> </Route>
			<Route path="/" component={ContactUs}> </Route>

		 </Route>


	 </Router>


	, app);
