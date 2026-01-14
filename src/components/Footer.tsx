import { Link } from "@tanstack/react-router";
import FancyArrow from "@/assets/svg/FancyArrow";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="px-9 py-10 sm:py-18 sm:px-16">
			<div className="flex flex-col min-[1646px]:flex-row w-full min-[1720px]:w-[95%] gap-8 2xl:gap-0 sm:justify-between items-center ">
				<div className="flex flex-col gap-7 2xl:gap-0 items-center 2xl:items-end">
					<Link to="/">
						<h1 className="text-7xl text-center sm:text-9xl font-primary font-extrabold uppercase hover:underline hover:underline-offset-10">
							Umang Raj Gurung
						</h1>
					</Link>
					<button
						onClick={scrollToTop}
						type="button"
						className="cursor-pointer flex flex-row items-center gap-2"
					>
						<h6 className="font-light hover:underline hover:underline-offset-10">
							Go back to the top
						</h6>
						<FancyArrow className="size-6" />
					</button>
				</div>
				<ul className="flex flex-col items-center 2xl:items-start gap-8">
					<li>
						<Link
							to="/about-me"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								About me
							</h5>
						</Link>
					</li>
					<li>
						<Link
							to="/portfolio-projects"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								Projects
							</h5>
						</Link>
					</li>
					<li>
						<Link
							to="/creative-corner"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								Creative Corner
							</h5>
						</Link>
					</li>
					<li>
						<Link
							to="/urg-services"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								Services
							</h5>
						</Link>
					</li>
					<li>
						<Link
							to="/experience"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								Experience
							</h5>
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<h5 className="font-light hover:underline hover:underline-offset-10">
								Contact
							</h5>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
