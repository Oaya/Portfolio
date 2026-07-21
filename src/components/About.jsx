import { GrDownload, GrMailOption } from "react-icons/gr";
import Avatar from "../images/avatar.png";
import Resume from "../images/resume.pdf";

export default function About() {
	return (
		<div
			className="component"
			id="about"
		>
			<div className="about__grid">
				<div className="about__photo">
					<img
						src={Avatar}
						alt=""
					/>
				</div>

				<div className="about__content">
					<h1 className="about__heading">Hello, I am Aya</h1>

					<p className="about__text">
						I'm a <span>full-stack developer </span> who loves building scalable
						backend systems and clean, testable APIs. I care about thoughtful
						architecture, reliable code, and the small details that make an app
						feel effortless to use.
					</p>
					<p className="about__text">
						Before tech, I spent 10+ years as a baker in Japan and Canada —
						where I learned the process-driven care for quality that carries
						into my engineering work today. I bring that same patience and
						precision to every project, and I love collaborating with teams to
						ship things people genuinely enjoy.
					</p>

					<div className="about__actions">
						<a
							className="about__btn about__btn--primary"
							href={Resume}
							download
						>
							<GrDownload />
							Download Resume
						</a>
						<a
							className="about__btn about__btn--outline"
							href="mailto:aya.okizaki@gmail.com"
						>
							<GrMailOption />
							Get in touch
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
