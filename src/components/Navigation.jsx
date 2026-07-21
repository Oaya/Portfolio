import Github from "../images/icon/icons8-github-48.png";
import LinkedIn from "../images/icon/icons8-linkedin-48.png";
import Mail from "../images/icon/icons8-mail-48.png";

function Navigation() {
	return (
		<div className="navigation">
			<div className="navigation__logo">
				<h2>Aya.O</h2>
			</div>
			<div className="navigation__menu">
				<a href="#about">About</a>
				<a href="#experience">Experience</a>
				<a href="#project">Project</a>
			</div>
			<div className="navigation__link">
				<a href="mailto:aya.okizaki@gmail.com">
					<img
						className="link__email"
						src={Mail}
						alt="mail"
					/>
				</a>
				<a href="https://github.com/Oaya">
					<img
						className="link__github"
						src={Github}
						alt="github"
					/>
				</a>
				<a href="https://www.linkedin.com/in/aya-okizaki/">
					<img
						className="link__linkedin"
						src={LinkedIn}
						alt="linkedin"
					/>
				</a>
			</div>
		</div>
	);
}

export default Navigation;
