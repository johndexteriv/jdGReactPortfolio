import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from "../../data/service";

const TemplateService = () => {
	return (
		<PageContainer classes={"bg-grey"}>
			<Container>
				<Row>
					<Col>
						<SectionTitle
							title={"Skill Set"}
							content={
								"Object oriented programming aptitude meets powerful client-side and server-side technologies."
							}
						/>
					</Col>
				</Row>

				<Row className={"service-bg"}>
					{services.map((service) => (
						<Col
							key={service.id}
							md={6}
							className={"mb-40 mb-xs-30"}
							style={{ paddingLeft: "115px" }}
						>
							<Service title={service.title} content={service.content} />
						</Col>
					))}
				</Row>
			</Container>
		</PageContainer>
	);
};

export default TemplateService;
