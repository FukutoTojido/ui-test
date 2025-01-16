import Arrow from "./Arrow";
import "./Contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<div className="contactInput">
				<div className="content">
					<div className="text">
						<div className="heading">Let us know how we can help you</div>
						<div className="subText">
							Nam condimentum lectus vel varius auctor. Maecenas interdum
							elementum ante, ut consectetur tellus laoreet non. Etiam enim leo,
							efficitur in risus et.
						</div>
					</div>
					<form>
						<div className="inputs">
							<div className="input">
								<label htmlFor="name">Your Name</label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="input">
								<label htmlFor="email">Your Email</label>
								<input type="email" name="email" id="email" />
							</div>
							<div className="input">
								<label htmlFor="subject">Your Subject</label>
								<input type="text" name="subject" id="subject" />
							</div>
							<div className="input">
								<label htmlFor="comment">Your Comment</label>
								<textarea name="comment" id="comment" />
							</div>
						</div>
						<button type="submit" className="button">
							<span>Get started</span>
							<Arrow type="Outlined" size={40} />
						</button>
					</form>
				</div>
			</div>
			<div className="contactInfo">
				<div className="contactDetail">
					<img src="/phone.svg" alt="" className="icon" />
					<div className="info">+852 3706 5996</div>
				</div>
				<div className="contactDetail">
					<img src="/mail.svg" alt="" className="icon" />
					<div className="info">info@agileops.com</div>
				</div>
				<div className="contactDetail">
					<img src="/address.svg" alt="" className="icon" />
					<div className="info">
						2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
					</div>
				</div>
			</div>
		</div>
	);
}
