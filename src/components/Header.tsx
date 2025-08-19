import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="absolute top-0 left-0 z-10 w-full h-[74px] flex items-end justify-center">
			<nav className="w-[1792px]">
				<ul className="flex justify-between items-center">
					<li className="font-primary text-2xl font-bold text-urg-black">
						<Link to="/">UMANG RAJ GURUNG</Link>
					</li>
					<ul className="flex gap-12 items-center">
						<li className="font-primary text-xl text-urg-black">About me</li>
						<li className="font-primary text-xl text-urg-black">Projects</li>
						<li className="font-primary text-xl text-urg-black">
							Creative Corner
						</li>
						<li className="font-primary text-xl text-urg-black">Experience</li>
					</ul>
					<li>
						<button type="button" className="secondary-button">
							Let's Work Together
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
