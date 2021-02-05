import React from "react";

const Skill = ({ title, percentage }) => {
	if (title === "github.com/johndexteriv") {
		return (
			<div className="single-skill">
				<a
					href="https://github.com/johndexteriv"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>{title}</span>
				</a>
			</div>
		);
	}
	return (
		<div className="single-skill">
			<span>{title}</span>
			{/* <div className="skill-bar">
                <div className="skill-progress" style={{width: `${percentage}%`}} data-progress={`${percentage}%`} />
            </div> */}
		</div>
	);
};

export default Skill;
