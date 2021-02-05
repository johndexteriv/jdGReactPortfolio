import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import Skill from "../../components/skill";
import contactData from "../../data/Contact";

const Contact = ({ type }) => {
	return (
		<div className={type !== "page" ? "section-padding section" : null}>
			<Container>
				<Row className={"align-items-center"}>
					<Col lg={6}>
						<Content classes={"about-content"}>
							<Row>
								<Col lg={6}>
									<h3 className="block-title">Contact</h3>

									<div className="skill-wrap">
										{contactData.contact.map((contact) => (
											<Skill key={contact.id} title={contact.title} />
										))}
									</div>
								</Col>
							</Row>
						</Content>
					</Col>

					<Col lg={6}>
						<Thumbnail
							classes={"about-thumbnail mb-md-30 mb-sm-30 mb-xs-30"}
							thumb={`about/${contactData.thumb}`}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contact;
