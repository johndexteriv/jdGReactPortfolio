import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import FoodFlickPortfolioDetails from "../../../templates/portfolio/details/foodflickDetails";
const FoodFlickDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<FoodFlickPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default FoodFlickDetailsPage;
