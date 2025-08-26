export default function Footer() {
	return (
		<footer className="py-18 px-16">
			<div className="flex w-[95%] justify-between items-center">
				<div className="flex flex-col items-end">
					<h1 className="text-9xl font-primary font-extrabold uppercase">
						Umang Raj Gurung
					</h1>
					<h6 className="font-light">Go back to the top</h6>
				</div>
				<ul className="flex flex-col gap-8">
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
