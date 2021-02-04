import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import EatDaBurgerPortfolioDetails from "../../../templates/portfolio/details/eatdaburgerDetails";
const EatDaBurgerDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<EatDaBurgerPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default EatDaBurgerDetailsPage;
