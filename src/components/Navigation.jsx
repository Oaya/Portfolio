import Mail from "../images/icon/mails.png";
import LinkedIn from "../images/icon/linkedin.png";
import Github from "../images/icon/github.png";

function Navigation() {
	return (
		<div className="navigation">
			<div className="navigation__logo">
				<h2>Portfolio.</h2>
			</div>
			<div className="navigation__link">
				<a href="mailto: ayaaa.okzk@gmail.com">
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
				<a href="https://www.linkedin.com/in/aya-okizaki-3581271bb/">
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
