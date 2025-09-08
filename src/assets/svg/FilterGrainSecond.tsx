import type { SVGProps } from "react";

// Define an interface for your custom props
interface FilterGrainSecondProps extends SVGProps<SVGSVGElement> {
	blendMode?: string; // Your custom prop
}

const FilterGrainSecond = ({
	blendMode,
	...svgProps
}: FilterGrainSecondProps) => (
	<svg {...svgProps}>
		<title>Filter grain</title>
		<filter id="grainy-second">
			<feTurbulence
				type="fractalNoise"
				baseFrequency={0.43}
				numOctaves={2}
				seed={2}
				result="colorNoise"
			/>
			<feColorMatrix
				in="colorNoise"
				type="saturate"
				values="0"
				result="grayscaleNoise"
			/>
			<feComponentTransfer in="grayscaleNoise" result="opacityAdjustedTexture">
				<feFuncA type="linear" slope={0.6} />
			</feComponentTransfer>
			<feBlend
				in="SourceGraphic"
				in2="opacityAdjustedTexture"
				mode={blendMode ? blendMode : "color-dodge"} // Use the destructured blendMode
			/>
		</filter>
	</svg>
);

export default FilterGrainSecond;
