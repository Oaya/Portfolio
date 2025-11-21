import { projectData } from "./projectData";

export default function Project() {
	return (
		<div>
			<div
				className="component"
				id="project"
			>
				<h1 className="component__heading">My Projects</h1>

				<div>
					{projectData.map((item) => (
						<div
							key={item.id}
							className="project__list"
						>
							<div className="project__image">
								<img
									className="image"
									src={item.img}
									alt=""
								/>
								{item.url && (
									<div className="image-hover">
										<a
											href={item.url}
											className="image-button"
										>
											Check the Page
										</a>
									</div>
								)}
							</div>
							<div className="project__content">
								<h2 className="project__title">{item.title}</h2>
								<p className="project__desc">{item.description}</p>
								<div className="project__tech-list">
									{item.tech.map((i) => (
										<span
											key={i}
											className="project__tech-item"
										>
											{i}
										</span>
									))}
								</div>
								<a
									className="project__btn"
									href={item.github}
								>
									Github Page
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
