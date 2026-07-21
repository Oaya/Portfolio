import Github from "../images/icon/icons8-github-48.png";
import LinkedIn from "../images/icon/icons8-linkedin-48.png";
import Email from "../images/icon/icons8-mail-48.png";

function Footer() {
	return (
		<footer
			className="footer"
			id="footer"
		>
			<h2>Aya Okizaki</h2>

			<p className="copy-right">© 2026 Aya. All rights are reserved.</p>

			<div className="contact__link">
				<a href="mailto:aya.okizaki@gmail.com">
					<img
						className="link__email"
						src={Email}
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
		</footer>
	);
}

export default Footer;
