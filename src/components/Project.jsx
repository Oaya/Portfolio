import { projectData } from "../util/constants/projectData";

const THEMES = ["peach", "sage", "blue"];

export default function Project() {
	return (
		<div
			className="component"
			id="project"
		>
			<h2 className="component__heading">Projects.</h2>

			<div className="project__grid">
				{projectData.map((item, i) => {
					const theme = THEMES[i % THEMES.length];
					return (
						<div
							key={i}
							className={`project__card project__card--${theme}`}
						>
							<div className="project__content">
								<div className="project__title-row">
									<h3 className="project__title">{item.title}</h3>
									<a
										className="project__github"
										href={item.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										View on GitHub
									</a>
								</div>
								<p className="project__desc">{item.description}</p>
								<div className="project__tech-list">
									{item.tech.map((t) => (
										<span
											key={t}
											className="project__tech-item"
										>
											{t}
										</span>
									))}
								</div>
							</div>

							<div className="project__image">
								<img
									className="project__img"
									src={item.img}
									alt={item.title}
								/>
								{item.url && (
									<a
										href={item.url}
										className="project__image-overlay"
										target="_blank"
										rel="noopener noreferrer"
									>
										Check the Page
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
