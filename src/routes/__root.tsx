import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Footer from "@/components/Footer";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<HeadContent />
			<Header />
			<Outlet />
			<Footer />
			<TanStackRouterDevtools />
		</>
	),
});
