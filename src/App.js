import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ Component Imported
 * */
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import PortfolioDetailsPage from "./pages/portfolio/details";
import ASGMDetailsPage from "./pages/portfolio/details/asgm";
import EatDaBurgerDetailsPage from "./pages/portfolio/details/eatdaburger";
import FoodFlickDetailsPage from "./pages/portfolio/details/foodflick";
import WorkDayDetailsPage from "./pages/portfolio/details/workday";
import WeatherDashDetailPage from "./pages/portfolio/details/weatherdash";
import EmployeeTempDetailPage from "./pages/portfolio/details/employeetemp";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404Error";

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route
						path={`${process.env.PUBLIC_URL + "/contact"}`}
						component={ContactPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/skills"}`}
						component={ServicePage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/portfolio-details"}`}
						component={PortfolioDetailsPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/ASGM WFU UI"}`}
						component={ASGMDetailsPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/Food + Flick"}`}
						component={FoodFlickDetailsPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/Eat Da Burger"}`}
						component={EatDaBurgerDetailsPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/Work Day Scheduler"}`}
						component={WorkDayDetailsPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/Weather Dashboard"}`}
						component={WeatherDashDetailPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/Employee Template Engine"}`}
						component={EmployeeTempDetailPage}
					/>

					<Route
						path={`${process.env.PUBLIC_URL + "/portfolio"}`}
						component={PortfolioGridThreeColumnPage}
					/>

					<Route
						path={`${process.env.PUBLIC_URL + "/about"}`}
						component={AboutPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/"}`}
						component={HomePersonalPortfolio}
					/>
					<Route exact component={ErrorPage} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
