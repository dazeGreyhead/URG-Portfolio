import GrainyBackground from "@/components/GrainyBackground";
import URGButton from "@/components/URGButton";
import { supabase } from "@/supabase-client";
import { ButtonType } from "@/utilities/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	title: z.string().nonempty(),
	content: z.string().nonempty(),
});

type CreativeContentType = z.infer<typeof schema>;

export const Route = createFileRoute("/add-creative-content")({
	component: AddCreativeContent,
});

function AddCreativeContent() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<CreativeContentType>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<CreativeContentType> = async (submitData) => {
		try {
			const { error, data } = await supabase
				.from("creative_content")
				.insert(submitData)
				.single();
			console.log(data);
			console.log(error);
		} catch (submitError) {
			setError("root", {
				type: "catch",
				message: "An unexpected error occurred. Please try again later.",
			});
		}
	};

	return (
		<main className="px-9 py-12 xl:pt-32 xl:px-16 xl:pb-12 h-fit min-h-screen flex flex-col gap-16">
			<section>
				<h3 className="mb-8">Add Creative Content</h3>
				<div className="flex justify-center">
					<form
						className="flex flex-col gap-10 w-full lg:w-fit items-center lg:items-start"
						onSubmit={handleSubmit(onSubmit)}
					>
						<label className="w-full">
							<h6 className="uppercase mb-1">Add Title</h6>
							<input
								{...register("title")}
								type="text"
								placeholder="Write a title here"
								className="p-big text-urg-black w-full lg:w-[500px] h-11 border-b-2 p-4"
							/>
							{errors.title && (
								<div className="text-urg-red">{errors.title?.message}</div>
							)}
						</label>

						<label className="w-full">
							<h6 className="uppercase mb-3">Content</h6>
							<input
								{...register("content")}
								type="text"
								placeholder="Give me some content"
								className="p-big text-urg-black w-full h-40 border-2 p-4 rounded-lg"
							/>
							{errors.content && (
								<div className="text-urg-red">{errors.content?.message}</div>
							)}
						</label>

						<URGButton type="submit" buttonType={ButtonType.secondary}>
							{isSubmitting ? "Submitting" : "Submit"}
						</URGButton>
						{errors.root && (
							<div className="text-urg-red">{errors.root?.message}</div>
						)}
					</form>
				</div>
			</section>
			<GrainyBackground />
		</main>
	);
}
