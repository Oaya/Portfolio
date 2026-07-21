import { skillsData } from "../util/constants/skillsData.js";

const THEMES = ["peach", "sage", "blue"];

export default function Skills() {
	return (
		<>
			<div
				className="component"
				id="skills"
			>
				<h2 className="component__heading">Skills.</h2>

				<div className="skills__list">
					{skillsData.map((skill, i) => {
						const theme = THEMES[i % THEMES.length];
						return (
							<div
								key={i}
								className={`project__card project__card--${theme} skills__card`}
							>
								<img
									src={skill.img}
									alt=""
								/>
								<p className="skills__title">{skill.title}</p>
								<p className="skills__desc">{skill.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
