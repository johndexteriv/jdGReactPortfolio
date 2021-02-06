import React from "react";

// File imported
import Header from "../../components/header/HeaderOne";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
// import PersonalPortfolioService from "../../container/service";
import Footer from "../../components/footer/FooterThree";

const HomePersonalPortfolio = () => {
	return (
		<div className={"main-wrapper p-0"}>
			<Header classes={"position-static"} />
			<BannerPersonalPortfolio />
			{/* <PersonalPortfolioService /> */}
			<Footer position={"static"} />
		</div>
	);
};

export default HomePersonalPortfolio;
