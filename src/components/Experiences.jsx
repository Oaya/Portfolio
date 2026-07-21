import { exData } from "../util/constants/exData.js";

export default function Experiences() {
	return (
		<div
			className="component"
			id="experience"
		>
			<h2 className="component__heading">Experience.</h2>

			<div className="ex__list">
				{exData.map((item, i) => (
					<div
						key={i}
						className="ex__item"
					>
						<div className="ex__header">
							<p className="ex__title">
								{item.title} ·{" "}
								<a
									className="ex__company-link"
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.company}
								</a>
								<span
									className={`ex__chip ex__chip--${item.type.toLowerCase()}`}
								>
									{item.type}
								</span>
							</p>
							<p className="ex__date">{item.date}</p>
						</div>
						<p className="ex__desc">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
