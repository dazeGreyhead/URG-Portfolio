import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { MdPhone } from "react-icons/md";
import { z } from "zod";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import { servicesProvided, urgContact } from "@/utilities/data";

const emailJSServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJSTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const schema = z.object({
	client_name: z.string().min(1, "Name is required"),
	client_phone: z.string().min(5, "Valid phone number is required"),
	client_email: z.string().email("Invalid email address"),
	needed_services: z.array(z.string()).min(1, "Select at least one service"),
	client_message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormFields = z.infer<typeof schema>;

export default function HomepageContact() {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const sendEmail: SubmitHandler<FormFields> = async (data: FormFields) => {
		try {
			const templateParams = {
				...data,
			};

			await emailjs.send(emailJSServiceID, emailJSTemplateID, templateParams, {
				publicKey: emailJSPublicKey,
			});
			alert("Your email was sent a successfully!");
			reset();
		} catch (error: any) {
			setError("root", {
				message: error?.text || "Failed to send email. Please try again.",
			});
		}
	};

	return (
		<section className="px-9 py-18 md:pt-22 xl:px-16 xl:pb-35 h-fit min-h-screen">
			<div className="flex flex-col gap-4 mb-14 xlm:mb-0 w-full xl:w-[430px]">
				<h3 className="text-urg-black">Let's Work Together</h3>
				<p className="text-urg-black-75">
					Now you've seen what I'm capable of, why don't we work together?
				</p>
			</div>
			<div className="flex items-center gap-20 lg:justify-between flex-col xl:flex-row w-full 2xl:w-[90%] h-fit">
				<div className="flex flex-col gap-6 w-full lg:w-[430px] items-center">
					<h2>Connect With Me</h2>
					<a href={`mailto:${urgContact.email}`}>
						<button
							className="primary-button text-2xl px-6 xl:px-12 w-fit"
							type="button"
						>
							{urgContact.email}
						</button>
					</a>
					<div className="flex flex-col gap-4 items-center">
						<div className="flex flex-row gap-2 items-center">
							<MdPhone className="size-10 fill-urg-black" />
							<h4>{urgContact.phone}</h4>
						</div>
						<SocialMediaIcons
							flexAndGap="flex flex-row gap-10 items-center"
							logoStyles="hover:fill-urg-blue "
							color="var(--color-urg-black)"
							size={45}
						/>
					</div>
				</div>

				<form
					className="flex flex-col gap-10 w-full lg:w-[50%] items-center lg:items-start"
					onSubmit={handleSubmit(sendEmail)}
				>
					<div className=" flex flex-col w-full 2xl:flex-row gap-10 2xl:gap-20">
						<div>
							<label>
								<h6 className="uppercase mb-1">Name</h6>
								<input
									{...register("client_name")}
									type="text"
									placeholder="Enter Your Name..."
									className="p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
								/>
							</label>
							{errors.client_name && (
								<div className="error mt-2">{errors.client_name.message}</div>
							)}
						</div>
						<div>
							<label>
								<h6 className="uppercase mb-1">Phone</h6>
								<input
									{...register("client_phone")}
									type="tel"
									placeholder="Enter Your Phone number..."
									className="p-big text-urg-black w-full lg:w-[340px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
								/>
							</label>
							{errors.client_phone && (
								<div className="error mt-2">{errors.client_phone.message}</div>
							)}
						</div>
					</div>
					<div className="w-full">
						<label className="w-full">
							<h6 className="uppercase mb-1">Email</h6>
							<input
								{...register("client_email")}
								type="email"
								placeholder="example@gmail.com"
								className="p-big text-urg-black w-full lg:w-[500px] h-11 border-b-2 border-urg-black p-4 focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
							/>
						</label>
						{errors.client_email && (
							<div className="error mt-2">{errors.client_email.message}</div>
						)}
					</div>
					<div className="w-full">
						<h6 className="uppercase mb-5 lg:mb-3">What do you need?</h6>
						<div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-x-16 lg:gap-y-6">
							{servicesProvided.map((service) => (
								<label
									key={service.title}
									className="flex gap-2 items-center w-fit"
								>
									<input
										type="checkbox"
										value={service.title}
										{...register("needed_services")}
										className="size-4 accent-urg-blue "
									/>
									<p className="p-big">{service.title}</p>
								</label>
							))}
							<label className="flex gap-2 items-center">
								<input
									type="checkbox"
									value="Other"
									{...register("needed_services")}
									className="size-4 accent-urg-blue"
								/>
								<p className="p-big">Other</p>
							</label>
						</div>
						{errors.needed_services && (
							<span className="error mt-2">
								{errors.needed_services.message}
							</span>
						)}
					</div>
					<div className="w-full">
						<label className="w-full">
							<h6 className="uppercase mb-3">Your Message</h6>
							<textarea
								{...register("client_message")}
								placeholder="Send me a message..."
								rows={4}
								className="p-big text-urg-black w-full border-2 border-urg-black px-4 py-2 rounded-lg focus:outline-urg-blue focus:border-urg-blue placeholder:text-urg-black-50"
							/>
						</label>
						{errors.client_message && (
							<div className="error mt-2">{errors.client_message.message}</div>
						)}
					</div>

					<button
						disabled={isSubmitting}
						type="submit"
						className="secondary-button w-full xl:w-fit"
					>
						{isSubmitting ? "Sending..." : "Send Me Your Message"}
					</button>
					{errors.root && (
						<div className="error mt-2">{errors.root.message}</div>
					)}
				</form>
			</div>
		</section>
	);
}
