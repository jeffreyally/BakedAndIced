import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { AboutPage } from "./pages/aboutPage";
import { FlavorsPage } from "./pages/flavorsPage";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					
					<Switch>
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/flavors" component={FlavorsPage} />
					<Route exact path="/" component={Home}/>
							
					<Route exact path="/demo" component={Demo}/>
							
					<Route exact path="/single/:theid" component={Single}/>
							
					<Route>
						<h1>Not found!</h1>
					</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
