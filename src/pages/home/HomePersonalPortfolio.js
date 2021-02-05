import React from "react";

// File imported
import Header from "../../components/header/HeaderOne";
// import SideHeader from "../../components/SideHeader";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import PersonalPortfolioService from "../../container/service";
import Footer from "../../components/footer/FooterThree";
// import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
// import PersonalPortfolioTeam from "../../container/team";
// import Contact from "../../container/contact";

const HomePersonalPortfolio = () => {
	return (
		<div className={"main-wrapper p-0"}>
			<Header classes={"position-static"} />
			{/* <SideHeader mobile={true} /> */}
			<BannerPersonalPortfolio />
			<PersonalPortfolioService />
			<Footer position={"static"} />
			{/* <PersonalPortfolio /> */}
			{/* <PersonalPortfolioTeam />
			<Contact /> */}
		</div>
	);
};

export default HomePersonalPortfolio;
