import { ButtonType } from "@/utilities/types";
import { Link } from "@tanstack/react-router";
import URGButton from "./URGButton";

export default function Header() {
	return (
		<header className="absolute top-0 left-0 z-10 px-7 h-12 xl:px-16 w-full md:h-[74px] flex items-end justify-center">
			<nav className="w-full">
				<ul className="flex justify-end items-center md:justify-between">
					{/* The checkbox input below is for the middle header links to collapse into a hamburger menu in small screens */}
					<input type="checkbox" id="hamburger-icon" className="hidden peer" />
					<li className="absolute z-30 xl:hidden top-3.3 left-7">
						<label htmlFor="hamburger-icon">
							<svg
								viewBox="0 0 62 62"
								className="fill-urg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1={17}
									y1={20.5}
									x2={62}
									y2={20.5}
									stroke="#1c262b"
									strokeWidth={3}
								/>
								<line
									y1={31}
									x2={45}
									y2={31}
									stroke="#1c262b"
									strokeWidth={3}
								/>
								<line
									x1={17}
									y1={41.5}
									x2={62}
									y2={41.5}
									stroke="#1c262b"
									strokeWidth={3}
								/>
							</svg>
						</label>
					</li>
					<li className="font-bold text-urg-black font-primary text-xl md:text-2xl md:ml-40 xl:ml-0">
						<Link to="/">UMANG RAJ GURUNG</Link>
					</li>

					{/* This is the set of links that will collapse into a hamburger menu */}
					<ul className="peer-checked:opacity-100 peer-checked:left-0 opacity-0 transition-opacity duration-300 flex fixed top-0 -left-full z-20 w-dvw h-dvh bg-urg-white flex-col items-center justify-center gap-25 xl:opacity-100 xl:flex xl:flex-row xl:gap-12 xl:static xl:w-auto xl:h-auto xl:bg-transparent">
						<li className="font-primary text-xl text-urg-black">
							<Link to="/about-me">About me</Link>
						</li>
						<li className="font-primary text-xl text-urg-black">Projects</li>
						<li className="font-primary text-xl text-urg-black">
							Creative Corner
						</li>
						<li className="font-primary text-xl text-urg-black">Experience</li>
					</ul>

					<li className="hidden md:block">
						<Link to="/contact">
							<URGButton buttonType={ButtonType.secondary}>
								Let's Work Together
							</URGButton>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
