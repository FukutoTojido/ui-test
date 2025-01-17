import Arrow from "./Arrow";
import "./Footer.css";

const Menu = ({
	title,
	items,
}: {
	title: string;
	items: {
		label: string;
		url: string;
	}[];
}) => {
	return (
		<div className="menu">
			<div className="title">{title}</div>
			<div className="items">
				{items.map((item) => {
					return (
						<a href={item.url} key={item.label} className="item">
							{item.label}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default function Footer() {
	const menus = [
		{
			title: "Company",
			items: [
				{
					label: "About us",
					url: "/#",
				},
				{
					label: "Career",
					url: "/#",
				},
				{
					label: "Contact",
					url: "/#",
				},
			],
		},
		{
			title: "Services",
			items: [
				{
					label: "Nulla dapibus",
					url: "/#",
				},
				{
					label: "Sed eget ante leo",
					url: "/#",
				},
				{
					label: "Gain consumer",
					url: "/#",
				},
			],
		},
		{
			title: "Resources",
			items: [
				{
					label: "Blogs",
					url: "/#",
				},
				{
					label: "Events",
					url: "/#",
				},
			],
		},
	];

	return (
		<div className="footer">
			<div className="top">
				<img src="/logo-white.svg" alt="" />
				<div>
					Nam condimentum lectus vel varius auctor.
					<br />
					Maecenas interdum elementum ante, ut consectetur.
				</div>
				<div className="links">
					<a href="/#">
						<img src="/insta.svg" alt="" />
					</a>
					<a href="/#">
						<img src="/facebook.svg" alt="" />
					</a>
					<a href="/#">
						<img src="/twitter.svg" alt="" />
					</a>
					<a href="/#">
						<img src="/youtube.svg" alt="" />
					</a>
				</div>
			</div>
			<div className="divider" />
			<div className="bottom">
				<div>
					<div className="menus">
						{menus.map((menu) => {
							return (
								<Menu title={menu.title} items={menu.items} key={menu.title} />
							);
						})}
					</div>
					<div className="news">
						<div className="title">Newsletter</div>
						<div className="input">
							<input type="text" name="newsletter" id="newsletter" />
							<button type="button">
								<Arrow type="Filled" color="#CBFC01" size={40} />
							</button>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div>Copyright Agileops Testing © 2021</div>
					<div className="tos">
						<span>
							<a href="/#">Privacy Policy</a>
						</span>
						<span>
							{"  "}.{"  "}
						</span>
						<span>
							<a href="/#">Terms and Conditions</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
