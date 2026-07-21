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
					{skillsData.map((skill, i) => (
						<span
							key={skill}
							className={`skills__item skills__item--${THEMES[i % THEMES.length]}`}
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</>
	);
}
