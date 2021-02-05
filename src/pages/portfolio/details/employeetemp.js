import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import EmployeeTempPortfolioDetails from "../../../templates/portfolio/details/employeetempDetails";
const EmployeeTempDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<EmployeeTempPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default EmployeeTempDetailsPage;
