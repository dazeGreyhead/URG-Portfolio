import type { SVGProps } from "react";
const FancyArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={100}
		height={100}
		viewBox="0 0 100 100"
		fill="#231F20"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<title>Fancy Arrow</title>
		<path d="M80.9921 24.8543L80.9207 33.2572C80.9207 33.2572 60.405 29.3905 51.5151 9.04867C51.5627 53.0083 53.5373 66.5617 53.5373 100H47.5341C47.5341 64.6007 49.7466 56.2766 49.6911 9.18255C40.3809 29.6267 20 33.84 20 33.84L20.0714 25.4371C45.3929 25.2008 48.8426 4.89053 49.3263 0.0236258L52.1812 0C52.1812 0 51.9988 25.1457 81 24.8622L80.9921 24.8543Z" />
	</svg>
);
export default FancyArrow;
