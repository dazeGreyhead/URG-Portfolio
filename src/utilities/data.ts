import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import type {
	educationHistory,
	serviceCardData,
	socialMediaLinks,
	testimonials,
	thingsILove,
	workHistory,
} from "./types";

export const urgContact = {
	email: "umangrajgurung@gmail.com",
	phone: "+977-9818827869",
	instagram: "https://www.instagram.com/umang_raj_gurung/",
	facebook: "https://www.facebook.com/ZAKrewdo/",
	linkedin: "https://www.linkedin.com/in/umang-raj-gurung/",
	youtube: "https://www.youtube.com/@urg6376",
};

export const servicesProvided: serviceCardData[] = [
	{
		title: "Web Development",
		description:
			"Let’s make the website that really reflects your business and what it has to offer. Make it hassle free, stable and focused on what it really needs to be.",
		icon: "/webdevelopmentServiceLogo.svg",
		softwareKnowledgeLogos: [
			"/javascriptLogo.png",
			"/reactLogo.png",
			"/WordPress_blue_logo.svg.png",
			"/Squarespace_Logo.png",
		],
		representingColor: "#209cda",
		shadowColor: "rgba(144, 207, 238, 1)",
		slug: "web-development",
	},
	{
		title: "Video Production",
		description:
			"You want a video content made and we want to make it. So let’s get started. Doesn’t matter if you want a short form vertical content or a literal TV Commercial. I can make it all happen.",
		icon: "/videoproductionServiceLogo.svg",
		softwareKnowledgeLogos: [
			"/DaVinci_Resolve_Studio.png",
			"/Adobe_Premiere_Pro_CC_icon.svg.png",
			"/Adobe_After_Effects_CC_icon.svg.png",
		],
		representingColor: "#e79536",
		shadowColor: "rgba(231, 159, 54, 0.5)",
		slug: "video-production",
	},
	{
		title: "Graphic Design",
		description:
			"So you need some small design made or you want to design a whole book! It doesn’t matter. Brochures, Booklets, Posters, Thumbnails? Let me handle it!",
		icon: "/graphicdesignServiceLogo.svg",
		softwareKnowledgeLogos: [
			"/Adobe_Photoshop_CC_icon.svg.png",
			"/Figma-logo.svg.png",
			"/indesignIcon.png",
			"/Adobe_Illustrator_CC_icon.svg.png",
		],
		representingColor: "#239884",
		shadowColor: "rgba(35, 152, 132, 0.5)",
		slug: "graphic-design",
	},
	{
		title: "Writing",
		description:
			"Oh wait, there’s some writing to be done? Be it fiction or technical, hit me up! You want a story to tell but you don’t know how to do it? I’m hear for you.",
		icon: "/writingServiceLogo.svg",

		representingColor: "#cc5c3b",
		shadowColor: "rgba(204, 92, 59, 0.5)",
		slug: "writing",
	},
	{
		title: "Tour Guiding",
		description:
			"So you want to experience the best parts of Nepal - it's culture, history, heritage, religious heritage and of course the mountains? You've found the right guy to show all that Nepal has to offer and more!",
		icon: "/guideServiceLogo.svg",

		representingColor: "#3c525d",
		shadowColor: "rgba(60, 82, 93, 0.5)",
		slug: "tour-guiding",
		externalLink: "https://nepaltourandtrek.com/",
	},
];

export const urgSocialMedia: socialMediaLinks[] = [
	{
		name: "Instagram",
		icon: RiInstagramFill,
		link: urgContact.instagram,
		sizeAdd: 10,
	},
	{
		name: "Facebook",
		icon: ImFacebook2,
		link: urgContact.facebook,
	},
	{
		name: "LinkedIn",
		icon: BsLinkedin,
		link: urgContact.linkedin,
	},
	{
		name: "Youtube",
		icon: FaYoutube,
		link: urgContact.youtube,
		sizeAdd: 18,
	},
];

export const urgThingsILove: thingsILove[] = [
	{
		title: "Grave of the Fireflies 1988",
		featuredImage: "/Grave Of The Fireflies Poster.png",
		altText: "Grave of the Fireflies poster",
		shortDescription:
			"Have only watched it once and don't have the guts to watch it again. It left quite an impact on me and this is my best film of all time. Prepare to cry a lot if you watch this movie and watch it subbed please. Yes I am a sub elitist!",
	},
	{
		title: "The Handmaiden 2016",
		featuredImage: "/The Handmaiden Poster.jpg",
		altText: "The Handmaiden poster",
		shortDescription:
			"Park Chan-wook is my favourite director and it is singlehandedly because of this film. I loved this film so much I watched it again as soon as it ended because I didn't want to leave the world that he had created. It's an amazing film and I love every one of Park Chan-wook's films.",
	},
	{
		title: "Children of Men",
		featuredImage: "/Children of Men Poster.jpg",
		altText: "Children of Men poster",
		shortDescription:
			"Yup these movies changed my life. Alfonso Cuaron's one shot style might be a gimmick in a way but it makes you feel like you're in the action and it's all happening in front of you. I really like Clive Owen who was a surprise to see in such a high concept movie. I wish he did more stuff like this. Nonetheless, this movie is quite a ride.",
	},
	{
		title: "Dota 2",
		featuredImage: "/Dota 2 poster.jpg",
		altText: "Dota 2",
		shortDescription:
			"I thought I was a hardcore gamer before I played dota 2. Turns out I knew nothing. Such a beautiful game but I wasted too much time in it that I probably could and should have used elsewhere. But yeah, a lot of memories, a lot of lessons and it just scratches that specific itch for a competitive ownage that can be had in such games. And the losses are brutal but that's just another life lesson in just another game.",
	},
	{
		title: "GTA Vice City",
		featuredImage: "/GTA Vice City Poster.avif",
		altText: "GTA Vice City",
		shortDescription:
			"This is nostalgia bait and goddamn do I have so much nostalgia for it. I remember the pc my father bought for me and playing vice city on it for the first time. I don't think anything really comes close to that. It could be nostalgia doing the heavy lifting here but it sure is special and I hope I may some day be able to give that same feeling to someone else through my work or maybe I'll buy a pc for my future child and he or she will someday experience that.",
	},
	{
		title: "Mass Effect 3",
		featuredImage: "/Mass Effect 3.jpg",
		altText: "Mass Effect 3",
		shortDescription:
			"A game where you have companinons who feel so real that you forget that they are actually fictional and that you are playing a game. Few pieces of art manage to do that, much less a game. I remember loading up a previous save because Tali, a companion, commited suicide because of my decision. Felt kinda like my friend died. Yup, I'll forgive the game for the shit 3 final color lame endings. The journey was very worthwhile and immensely enjoyable.",
	},
	{
		title: "The Witcher 3",
		featuredImage: "/The Witcher 3 Poster.avif",
		altText: "The Witcher 3",
		shortDescription:
			"I don't know, I've gravitated towards medieval fantasy in anime and games but I don't really like lord of the rings. I remember trying skyrim and being quite disappointed. Somehow I had higher expectations for RPGs. Well Witcher 2 came along and blew me away. Such good graphics and story. Then witcher 3 released and became incredibly big and for a good reason. CDPR knocked it out of the park.",
	},
	{
		title: "Frieren Beyond Journey's End",
		featuredImage: "/Frieren Poster.jpg",
		altText: "Frieren Beyond Journey's End",
		shortDescription:
			"An anime that touches your soul. In this modern world, where I began thinking classics need time to become classics or perhaps things are only good because of nostalgia, well here comes a modern masterpiece. I recommend this to everyone and gush about it everywhere. And you, whoever is reading must also watch this.",
	},
];

export const urgWorkHistory: workHistory[] = [
	{
		companyName: "Gyaltsen Rug Industries / Makamali Carpet & Textile",
		position: "Freelance Web Developer & Designer",
		startDate: "April 2024",
		endDate: "Present",
		jobDescription:
			"Developed and maintaining both websites of Gyaltsen Rug and Makamali",
	},
	{
		companyName: "Volunteer Corps Nepal",
		position: "Freelance Graphic Designer",
		startDate: "March 2024",
		endDate: "Present",
		jobDescription: "Designing VCN website and many marketing materials",
	},
	{
		companyName: "Innovate Tech",
		position: "Associate Editor",
		startDate: "May 2022",
		endDate: "August 2023",
		jobDescription:
			"Editing the videos of the education platform: My Second Teacher",
	},
	{
		companyName: "AnkaEK",
		position:
			"Video Editor / Animator / Camera Operator / Concept Creator / Writer",
		startDate: "November 2020",
		endDate: "July 2021",
		jobDescription:
			"Creating concepts for short films, advertisements, documentaries etc.",
	},
	{
		companyName: "Jazz Productions",
		position: "Video Editor / Production Assistant / Concept Creator",
		startDate: "August 2019",
		endDate: "February 2020",
		jobDescription:
			"Creating concepts for music videos, helping with the production and editing them.",
	},
	{
		companyName: "Sofar Sounds Kathmandu",
		position: "Video Editor / Videographer",
		startDate: "August 2018",
		endDate: "December 2019",
		jobDescription: "Shooting the artists’ performances and editing them.",
	},
	{
		companyName: "Kantipur Digital Corp.",
		position: "Intern Video Editor",
		startDate: "August 2017",
		endDate: "November 2017",
		jobDescription:
			"Editing footage from Kathmandu TV and radio to upload it on YouTube.",
	},
	{
		companyName: "Techlekh",
		position: "Creative Design Lead / Video Editor / Videographer",
		startDate: "April 2016",
		endDate: "May 2017",
		jobDescription:
			"Producing, editing and shooting almost all of Techlekh videos during tenure.",
	},
];

export const urgEducationHistory: educationHistory[] = [
	{
		schoolName: "Deerwalk Institute of Technology",
		startDate: "2013",
		endDate: "2017",
		degree:
			"Bachelors of Science in Computer Science and Information Technology",
	},
	{
		schoolName: "Kathmandu Model College",
		startDate: "2011",
		endDate: "2013",
		degree: "Higher Secondary Education Board, Science",
	},
];

export const urgSoftwareProficiencies = [
	{
		softwareName: "Adobe Premiere Pro",
		logo: "/Adobe_Premiere_Pro_CC_icon.svg.png",
	},
	{
		softwareName: "Davinci Resolve",
		logo: "/DaVinci_Resolve_Studio.png",
	},
	{
		softwareName: "Adobe After Effects",
		logo: "/Adobe_After_Effects_CC_icon.svg.png",
	},
	{
		softwareName: "ReactJS",
		logo: "/reactLogo.png",
	},
	{
		softwareName: "Javascript",
		logo: "/javascriptLogo.png",
	},
	{
		softwareName: "WordPress",
		logo: "/WordPress_blue_logo.svg.png",
	},
	{
		softwareName: "Squarespace",
		logo: "/Squarespace_Logo.png",
	},
	{
		softwareName: "Adobe Photoshop",
		logo: "/Adobe_Photoshop_CC_icon.svg.png",
	},
	{
		softwareName: "Figma",
		logo: "/Figma-logo.svg.png",
	},
	{
		softwareName: "Adobe InDesign",
		logo: "/indesignIcon.png",
	},
	{
		softwareName: "Adobe Illustrator",
		logo: "/Adobe_Illustrator_CC_icon.svg.png",
	},
];

export const urgTestimonials: testimonials[] = [
	{
		clientName: "Avib Adhikari",
		clientPosition: "CEO",
		companyName: "German Exam Nepal",
		companyLogo: "/German Exam Nepal Logo.jpg",
		stars: 5,
		review: `Starting German Exam Nepal, we were moving the German Language space in Nepal and when announcing TELC we  knew we didn't want the same old boring reels everyone else was doing. We had a vision for a funky, retro vibe but a very tight startup budget of under 5,000 Rs.

That’s where Umang stepped in. He didn't just direct; he captured our concept perfectly and handled the entire edit, delivering something far beyond our expectations. If you want to move away from the 'standard' and actually bring a unique idea to life, Umang is your guy. He truly knows the craft of filmmaking.`,
		clientPhoto: "/Abiv Photo 2.jpeg",
	},
];
