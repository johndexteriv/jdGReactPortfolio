import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import ASGMPortfolioDetails from "../../../templates/portfolio/details/asgmDetails";

const ASGMDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<ASGMPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default ASGMDetailsPage;
