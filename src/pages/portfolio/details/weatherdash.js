import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import WeatherDashPortfolioDetails from "../../../templates/portfolio/details/weatherdashDetails";
const WeatherDashDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<WeatherDashPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default WeatherDashDetailsPage;
