export default function Footer() {
	return (
		<footer className="px-9 py-10 sm:py-18 sm:px-16">
			<div className="flex flex-col min-[1646px]:flex-row w-full min-[1720px]:w-[95%] gap-8 2xl:gap-0 sm:justify-between items-center">
				<div className="flex flex-col gap-7 2xl:gap-0 items-center 2xl:items-end">
					<h1 className="text-7xl text-center sm:text-9xl font-primary font-extrabold uppercase">
						Umang Raj Gurung
					</h1>
					<h6 className="font-light">Go back to the top</h6>
				</div>
				<ul className="flex flex-col items-center 2xl:items-start gap-8">
					<li>
						<h5 className="font-light">About me</h5>
					</li>
					<li>
						<h5 className="font-light">Projects</h5>
					</li>
					<li>
						<h5 className="font-light">Creative Corner</h5>
					</li>
					<li>
						<h5 className="font-light">Experience</h5>
					</li>
				</ul>
			</div>
		</footer>
	);
}
