import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import Skill from "../../components/skill";
import aboutData from "../../data/AboutMe";

const AboutMe = ({ type }) => {
	return (
		<div className={type !== "page" ? "section-padding section" : null}>
			<Container>
				<Row className={"align-items-center"}>
					<Col lg={6}>
						<Thumbnail
							classes={"about-thumbnail mb-md-30 mb-sm-30 mb-xs-30"}
							thumb={`about/${aboutData.thumb}`}
						/>
					</Col>

					<Col lg={6}>
						<Content classes={"about-content"}>
							{type !== "page" ? (
								<h3 className="block-title">ABOUT ME</h3>
							) : null}
							<p style={{ textIndent: "40px" }}>{aboutData.bio}</p>
							<p style={{ textIndent: "40px" }}>{aboutData.bio1}</p>
							<p style={{ textIndent: "40px" }}>{aboutData.bio2}</p>
							<ul className="personal-info">
								<li>
									<span>Github:</span>
									<a
										href="https://github.com/johndexteriv"
										target="_blank"
										rel="noopener noreferrer"
									>
										{aboutData.github}
									</a>
								</li>
								<li>
									<span>Resume:</span>
									<a href="https://drive.google.com/uc?export=download&id=1Bf52jO4a8wROdY9CfBRgtt3sNBwNuFh6">
										{aboutData.resume}
									</a>
								</li>
								<li>
									<span>Email:</span>
									{aboutData.email}
								</li>
								<li>
									<span>Freelance:</span>
									{aboutData.availability ? "Available" : "Not Available"}
								</li>
							</ul>
							<Row>
								<Col lg={6}>
									<h3 className="block-title">Skill</h3>

									<div className="skill-wrap">
										{aboutData.skills.map((skill) => (
											<Skill
												key={skill.id}
												title={skill.title}
												percentage={skill.percentage}
											/>
										))}
									</div>
								</Col>
								<Col lg={6}>
									<br />
									<br />
									<div className="skill-wrap">
										{aboutData.skillstwo.map((skill) => (
											<Skill
												key={skill.id}
												title={skill.title}
												percentage={skill.percentage}
											/>
										))}
									</div>
								</Col>
							</Row>
						</Content>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutMe;
