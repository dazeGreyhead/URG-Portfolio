import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creative-corner/$id")({
	component: CreativeCornerContent,
});

function CreativeCornerContent() {
	const { id } = Route.useParams();
	return <div>Hello "/creative-corner/{id}"!</div>;
}
