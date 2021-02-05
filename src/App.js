import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Switcher from "./components/Switcher";

/*
 * @ Component Imported
 * */
// import HomeFreelancerPortfolio from "./pages/home/HomeFreelancerPortfolio";
// import HomeThreeColumn from "./pages/home/HomeThreeColumn";
// import HomeFourColumn from "./pages/home/HomeFourColumn";
// import HomeFiveColumn from "./pages/home/HomeFiveColumn";
// import HomeBlog from "./pages/home/HomeBlog";
import HomeDefault from "./pages/home/HomeDefault";
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import PortfolioDetailsPage from "./pages/portfolio/details";
import ASGMDetailsPage from "./pages/portfolio/details/asgm";
import EatDaBurgerDetailsPage from "./pages/portfolio/details/eatdaburger";
import FoodFlickDetailsPage from "./pages/portfolio/details/foodflick";
import WorkDayDetailsPage from "./pages/portfolio/details/workday";
import WeatherDashDetailPage from "./pages/portfolio/details/weatherdash";
import EmployeeTempDetailPage from "./pages/portfolio/details/employeetemp";
import BlogThreeColumnPage from "./pages/blog/ThreeColumn";
import BlogTwoColumnLeftSidebarPage from "./pages/blog/TwoColumnLeftSidebar";
import BlogTwoColumnRightSidebarPage from "./pages/blog/TwoColumnRightSidebar";
import BlogDetailsRightSidebarPage from "./pages/blog/BlogDetailsRightSidebar";
import BlogDetailsLeftSidebarPage from "./pages/blog/BlogDetailsLeftSidebar";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404Error";
import DemoPage from "./pages/demo";

const App = () => {
	return (
		<Fragment>
			<Switcher />
			<Router>
				<Switch>
					<Route
						path={`${process.env.PUBLIC_URL + "/contact"}`}
						component={ContactPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/team"}`}
						component={TeamPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/service"}`}
						component={ServicePage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/blog-details-left-sidebar"}`}
						component={BlogDetailsLeftSidebarPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/blog-details"}`}
						component={BlogDetailsRightSidebarPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/blog-two-column-left-sidebar"}`}
						component={BlogTwoColumnLeftSidebarPage}
					/>
					<Route
						path={`${
							process.env.PUBLIC_URL + "/blog-two-column-right-sidebar"
						}`}
						component={BlogTwoColumnRightSidebarPage}
					/>
					<Route
						path={`${process.env.PUBLIC_URL + "/blog"}`}
						component={BlogThreeColumnPage}
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
					{/* <Route
						path={`${
							process.env.PUBLIC_URL + "/portfolio-grid-three-column-fullwidth"
						}`}
						component={PortfolioGridThreeColumnFullWidthPage}
					/> */}

					<Route
						path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column"}`}
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
