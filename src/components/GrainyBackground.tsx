import FilterGrain from "@/assets/svg/FilterGrain";
import FilterGrainSecond from "@/assets/svg/FilterGrainSecond";

export default function GrainyBackground() {
	return (
		<div className="h-screen w-full fixed top-0 left-0 -z-10 bg-linear-to-r from-urg-black to-[#DEE2EA] bg-[url(/grainy-background.png)] bg-contain bg-blend-multiply opacity-40" />
	);
}
