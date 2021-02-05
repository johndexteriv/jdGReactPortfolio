import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import WorkDayPortfolioDetails from "../../../templates/portfolio/details/workdayDetails";
const WorkDayDetailsPage = () => {
	return (
		<Fragment>
			<Header classes={"position-static"} />
			<SideHeader mobile={true} />
			<WorkDayPortfolioDetails />
			<FooterThree position="fixed" />
		</Fragment>
	);
};

export default WorkDayDetailsPage;
