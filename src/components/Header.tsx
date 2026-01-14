import { Link } from "@tanstack/react-router";
import {
	easeInOut,
	MotionConfig,
	motion,
	useMotionValueEvent,
	useScroll,
} from "motion/react";
import { useState } from "react";
import { ButtonType } from "@/utilities/types";
import URGButton from "./URGButton";

export default function Header() {
	// Tracks the horzontal scroll of the page.
	const { scrollY } = useScroll();

	// Toggle to hide the header when scrolled down the page.
	const [hidden, setHidden] = useState(false);
	// Toggle to hide the backdrop of the header at the top of the page.
	const [headerBackdrop, setHeaderBackdrop] = useState(false);

	// Toggle to open hamburger that hides the header links in hamburger menu in smaller devices.
	const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

	// This is the function that checks if the scrollY of the page has changed and hides the header and backdrop accordingly.
	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > 50) {
			setHeaderBackdrop(true);
		} else {
			setHeaderBackdrop(false);
		}
		if (previous && latest > previous && latest && latest > 30) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	// Function for opening and closing the hamburger menu.
	function showHamburgerMenu() {
		setOpenHamburgerMenu(!openHamburgerMenu);
	}

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden && !openHamburgerMenu ? "hidden" : "visible"}
			transition={{ duration: 0.3, ease: "linear" }}
			className={`fixed top-0 left-0 z-100 px-7 h-18 xl:px-16 w-full md:h-[92px] flex items-center justify-center `}
		>
			<nav className="w-full">
				<ul className="flex justify-end items-center md:justify-between">
					<li className="absolute z-30 block 2xl:hidden top-3.3 left-7">
						<MotionConfig
							transition={{
								duration: 0.3,
								ease: easeInOut,
							}}
						>
							<motion.svg
								viewBox="0 0 62 62"
								className="fill-urg-black size-10 md:w-[50px] md:h-[50px]"
								xmlns="http://www.w3.org/2000/svg"
								onClick={showHamburgerMenu}
								initial={false}
								animate={openHamburgerMenu ? "open" : "closed"}
							>
								<title>Hamburger Icon</title>
								<motion.line
									variants={{
										open: {
											rotate: "45deg",
											y: 10.5,
											x: -10.5,
										},
										closed: {
											rotate: "0deg",
											y: 0,
											x: 0,
										},
									}}
									x1={17}
									y1={20.5}
									x2={62}
									y2={20.5}
									stroke="#1c262b"
									strokeWidth={3}
								/>
								<motion.line
									variants={{
										open: {
											opacity: 0,
											x: 10.5,
										},
										closed: {
											opacity: 1,
											x: 0,
										},
									}}
									y1={31}
									x2={45}
									y2={31}
									stroke="#1c262b"
									strokeWidth={3}
								/>
								<motion.line
									variants={{
										open: {
											rotate: "-45deg",
											y: -10.5,
											x: -10.5,
										},
										closed: { rotate: "0deg", y: 0, x: 0 },
									}}
									x1={17}
									y1={41.5}
									x2={62}
									y2={41.5}
									stroke="#1c262b"
									strokeWidth={3}
								/>
							</motion.svg>
						</MotionConfig>
					</li>
					<li className="font-bold text-urg-black font-primary text-xl md:text-2xl md:ml-40 2xl:ml-0 hover:underline hover:underline-offset-10">
						<Link to="/">UMANG RAJ GURUNG</Link>
					</li>

					{/* Links below will be hidden in smaller devices */}
					<ul className="hidden 2xl:flex items-center justify-center  flex-row gap-12 w-auto h-auto ">
						<Link
							to="/about-me"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								About me
							</li>
						</Link>
						<Link
							to="/portfolio-projects"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Projects
							</li>
						</Link>
						<Link
							to="/creative-corner"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Creative Corner
							</li>
						</Link>
						<Link
							to="/urg-services"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Services
							</li>
						</Link>
						<Link
							to="/experience"
							activeProps={{
								className: "underline underline-offset-10",
							}}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Experience
							</li>
						</Link>
					</ul>

					{/* Copy of the links to pages that will be revealed by hamburger menu in smaller devices*/}
					<motion.ul
						className=" flex fixed left-0 bg-urg-white top-0 z-20 w-dvw h-screen flex-col items-center justify-center gap-20 2xl:hidden overflow-hidden"
						variants={{
							open: {
								opacity: "100%",
								pointerEvents: "auto",
							},
							closed: {
								opacity: "0",
								pointerEvents: "none",
							},
						}}
						initial="closed"
						animate={openHamburgerMenu ? "open" : "closed"}
						transition={{ duration: 0.3 }}
					>
						<Link
							to="/about-me"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								About me
							</li>
						</Link>
						<Link
							to="/portfolio-projects"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Projects
							</li>
						</Link>
						<Link
							to="/creative-corner"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Creative Corner
							</li>
						</Link>
						<Link
							to="/urg-services"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Services
							</li>
						</Link>
						<Link
							to="/experience"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Experience
							</li>
						</Link>
						<Link
							to="/contact"
							activeProps={{
								className: "underline underline-offset-10",
							}}
							onClick={showHamburgerMenu}
						>
							<li className="font-primary text-xl text-urg-black px-1 py-1 hover:underline hover:underline-offset-10">
								Contact
							</li>
						</Link>
					</motion.ul>

					<li className="hidden md:block">
						<Link to="/contact">
							<URGButton buttonType={ButtonType.secondary}>
								Let's Work Together
							</URGButton>
						</Link>
					</li>
				</ul>
			</nav>
			{/* The blurry, white background of the header */}
			<motion.div
				initial={false}
				animate={{ opacity: headerBackdrop ? 1 : 0 }}
				transition={{ duration: 1 }}
				className="absolute inset-0 -z-1 bg-white/30 backdrop-blur-sm"
			/>
		</motion.header>
	);
}
