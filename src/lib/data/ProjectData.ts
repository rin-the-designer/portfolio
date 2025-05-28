import type { Project } from './types';

// Raw data type (before transformation)
type RawProject = Omit<Project, 'tags'> & {
	tags: string[];
	projectType: string;
	team?: { name: string; role?: string; portfolio?: string }[];
	company?: { name: string; link?: string };
	roles?: string[];
	tools: string[];
};

// Helper function to transform raw data into Project format
function createProject(item: RawProject): Project {
	return {
		...item,
		tags: item.tags
	};
}

// Raw data array
const rawProjects: RawProject[] = [
	{
		title: 'Loops',
		slug: 'loops',
		thumbnail: '/img/projects/loops/thumbnail.png',
		coverimg: '/img/projects/loops/cover.png',
		excerpt: 'A collective of loops of life and death',
		tags: ['Artwork', 'Coding'],
		date: {
			year: 2025,
			month: 5
		},
		roles: ['Design & Development'],
		tools: ['SvelteKit', 'JavaScript'],
		projectType: 'Individual',
		intro:
			'The Loops is a collection of digital artworks that explore the cycles and repetitions woven into everyday life. These works visualize the tension between involuntary loops, patterns we find ourselves caught in, and the chosen thresholds where we assert meaning and agency.'
	},
	{
		title: 'Pick and Play',
		slug: 'pick-and-play',
		thumbnail: '/img/projects/pick-and-play/thumbnail.png',
		coverimg: '/img/projects/pick-and-play/cover.png',
		excerpt: "Vinyl collectors' platform",
		tags: ['UI/UX', 'Branding'],
		roles: ['Design Lead'],
		tools: ['Figma', 'ProtoPie'],
		date: {
			year: 2022,
			month: 10
		},
		projectType: 'Individual',
		intro:
			"Pick & Play is a vinyl collector's community, offering a platform to buy and sell used vinyl, exchange information about analog music, and consume curated content. Unlike the United States, which maintained a robust community of vinyl enthusiasts even during the decline of analog music, South Korea lacked such space. Thus, Pick & Play addresses the unique challenges faced by young generation Korean vinyl collectors."
	},
	{
		title: 'Career Dive',
		slug: 'career-dive',
		thumbnail: '/img/projects/career-dive/thumbnail.png',
		coverimg: '/img/projects/career-dive/cover.png',
		excerpt: 'Career advising and mentoring platform',
		tags: ['UI/UX', 'Branding'],
		date: {
			year: 2022,
			month: 10
		},
		roles: ['Design Lead'],
		tools: ['Figma'],
		projectType: 'Team',
		team: [
			{
				name: 'Su-hyeon Park'
			}
		],
		intro:
			'Career Dive is a service created for the purpose of exchanging career information. We provide a real-time voice-based mentoring service by matching job seekers who are having difficulty collecting employment information with current employees who want to work on the side.'
	},
	{
		title: 'Dacon',
		slug: 'dacon',
		thumbnail: '/img/projects/dacon/thumbnail.png',
		coverimg: '/img/projects/dacon/cover.png',
		excerpt: 'Data science competition & hackathon platform',
		tags: ['UI/UX', 'Web'],
		date: {
			year: 2021,
			month: 6
		},
		roles: ['UI Designer'],
		tools: ['Figma'],
		projectType: 'Work',
		company: {
			name: 'Dacon',
			link: 'https://dacon.io'
		},
		intro:
			'Dacon is an online data science competition platform in Korea. Users join to participate in challenges sponsored or requested by Korean government or companies.'
	},
	{
		title: 'Hwanghak Casual',
		slug: 'hwanghak-casual',
		thumbnail: '/img/projects/hwanghak-casual/thumbnail.png',
		coverimg: '/img/projects/hwanghak-casual/cover.png',
		excerpt: 'Local workwear brand from Hwanghak-dong, Seoul',
		tags: ['Branding', 'Web', 'Fashion'],
		date: {
			year: 2023,
			month: 10
		},
		roles: ['Web Design', 'Branding', 'Photography'],
		tools: ['Figma', 'WordPress', 'Lightroom'],
		projectType: 'Team',
		team: [
			{
				name: 'Kyungsoo Kim'
			},
			{
				name: 'Insu Jeong',
				portfolio: 'https://www.instagram.com/insoo.gfx/'
			},
			{
				name: 'Jaehoon Cho',
				portfolio: 'https://chojh.kr'
			},
			{
				name: 'Hyeonhye Park'
			}
		],
		intro: `Based in Hwanghak-dong, Seoul, Hwanghak Casual is a local workwear brand designed to revitalize the neighborhood once recognized for its craftmanship. The brand symbolizes Hwanghak-dong with a "Yellow Crane" and embodies the roughness of crafting. With the slogan "Work Casually, Wear Crafty", Hwanghak Casual targets not only traditional craftmen, but also those who craft their ways through everyday work.`
	},
	{
		title: 'Dolbomgil',
		slug: 'dolbomgil',
		thumbnail: '/img/projects/dolbomgil/thumbnail.png',
		coverimg: '/img/projects/dolbomgil/cover.png',
		excerpt: 'Design/business proposal for child care service',
		tags: ['UI/UX', 'Branding', 'Proposal'],
		date: {
			year: 2022,
			month: 12
		},
		roles: ['Team Lead'],
		tools: ['Figma', 'Illustrator'],
		projectType: 'Team',
		team: [
			{
				name: 'Jaehoon Cho',
				portfolio: 'https://chojh.kr'
			},
			{
				name: 'Sunghyun Park'
			},
			{
				name: 'Yujin Heo'
			},
			{
				name: 'Haixin Zhang'
			}
		],
		intro:
			'Through an in-class project conducted on the topic of service planning for adults in their 30s to 40s, we proposed a child care service, dolbomgil, for parents of elementary school children.'
	},
	{
		title: 'MOCA',
		slug: 'moca',
		thumbnail: '/img/projects/moca/thumbnail.png',
		coverimg: '/img/projects/moca/cover.png',
		excerpt: 'Café finder for dietary restrictions',
		tags: ['UI/UX', 'Branding', 'Proposal'],
		date: {
			year: 2022,
			month: 12
		},
		roles: ['Team Lead'],
		tools: ['Figma'],
		projectType: 'Team',
		team: [
			{
				name: 'Ji-hyeon Kim'
			},
			{
				name: 'Su-hyeon Park'
			},
			{
				name: 'Yeon-su Lee'
			}
		],
		intro:
			'MOCA is a café discovery platform that helps users find cafes offering gluten-free and lactose-free options. The service aims to make dining out easier for people with dietary restrictions by providing detailed menu information and verified reviews from the community.'
	},
	{
		title: 'Seoul Bike App Design Proposal',
		slug: 'seoul-bike',
		thumbnail: '/img/projects/seoul-bike/thumbnail.png',
		coverimg: '/img/projects/seoul-bike/cover.png',
		excerpt: 'Design proposal for Seoul Bike app',
		tags: ['UI/UX', 'Proposal', 'Concept'],
		date: {
			year: 2022,
			month: 4
		},
		roles: ['Design Lead'],
		tools: ['Figma'],
		projectType: 'Team',
		team: [
			{
				name: 'Ji-hyeon Kim'
			},
			{
				name: 'Su-hyeon Park'
			},
			{
				name: 'Yeon-su Lee'
			}
		],
		intro:
			'Through an in-class project conducted on the topic of service planning for adults in their 30s to 40s, we proposed a child care service, dolbomgil, for parents of elementary school children.'
	},
	{
		title: 'Dreamers',
		slug: 'dreamers',
		thumbnail: '/img/projects/dreamers/thumbnail.png',
		coverimg: '/img/projects/dreamers/cover.png',
		excerpt: 'Social cooperative in Suwon, Gyeonggi-do',
		tags: ['Branding', 'Web'],
		date: {
			year: 2020,
			month: 8
		},
		roles: ['Freelance Designer'],
		tools: ['Figma', 'Illustrator'],
		projectType: 'Work',
		company: {
			name: 'Dreamers',
			link: 'https://dreamers-coop.co.kr'
		},
		intro:
			'Dreamers is a social cooperative in South Korea that offers counseling in areas such as employment, career guidance, and emotional well-being. Based in Suwon, Gyeonggi-do, they host various programs for self-discovery and community engagement.'
	},
	{
		title: 'YSL Legacy Book',
		slug: 'ysl-legacy-book',
		thumbnail: '/img/projects/ysl-legacy-book/thumbnail.png',
		coverimg: '/img/projects/ysl-legacy-book/cover.png',
		excerpt: 'A concept legacy book for fashion designerYves Saint Laurent',
		tags: ['Editorial', 'Concept'],
		date: {
			year: 2021,
			month: 12
		},
		tools: ['InDesign'],
		projectType: 'Individual',
		intro:
			'This book covers the legacy of the French fashion designer, Yves Saint Laurent. All contents of this book were retrieved from the official Musée Yves Saint Laurent website. Please visit https://museeyslparis.com/ for the original text and images.'
	},
	{
		title: 'A Week of Vinyl Records',
		slug: 'a-week-of-vinyl-records',
		thumbnail: '/img/projects/a-week-of-vinyl-records/thumbnail.png',
		coverimg: '/img/projects/a-week-of-vinyl-records/cover.png',
		excerpt: 'A one week project of archiving vinyl records',
		tags: ['Editorial'],
		date: {
			year: 2021,
			month: 10
		},
		tools: ['InDesign', 'Photoshop'],
		projectType: 'Individual',
		intro: `'A Week of Vinyl Records' was a part of an in-class project of Editorial Design 2 course. The project was carried out under a designated topic of 'archiving a week' and a limited theme color of CMYK.`
	},
	{
		title: 'Bauhaus 100th Anniversary',
		slug: 'bauhaus-100',
		thumbnail: '/img/projects/bauhaus-100/thumbnail.png',
		coverimg: '/img/projects/bauhaus-100/cover.png',
		excerpt: 'Concept poster for Bauhaus 100th Anniversary exhibition',
		tags: ['Editorial', 'Concept'],
		date: {
			year: 2021,
			month: 6
		},
		tools: ['Illustrator'],
		projectType: 'Individual',
		intro:
			'This poster is a concept poster for the 100th anniversary of the Bauhaus school. This poster and main visual were created under the premise of a Bauhaus 100th anniversary exhibition being held in Seoul.'
	},
	{
		title: 'THENOW',
		slug: 'thenow',
		thumbnail: '/img/projects/thenow/thumbnail.png',
		coverimg: '/img/projects/thenow/cover.png',
		excerpt: 'Concept magazine exploring the design connection between THEN and NOW',
		tags: ['Editorial'],
		date: {
			year: 2021,
			month: 6
		},
		tools: ['InDesign'],
		projectType: 'Individual',
		intro: `The connection between 'THEN' and 'NOW'. THENOW is a concept lifestyle magazine that compares design from the past and design of today.`
	},
	{
		title: 'Teasign',
		slug: 'teasign',
		thumbnail: '/img/projects/teasign/thumbnail.png',
		coverimg: '/img/projects/teasign/cover.png',
		excerpt: 'A tea brand designed with the patterns of each material',
		tags: ['Editorial', 'Branding'],
		date: {
			year: 2021,
			month: 6
		},
		tools: ['Illustrator'],
		projectType: 'Individual',
		intro:
			'Teasign is a concept tea brand designed with the patterns of each material. The brand name is derived from the word "tea" and "design".'
	}
];

// Export transformed projects
export const projects: Project[] = rawProjects.map(createProject);

// Export a function to get projects by tag
export function getProjectsByTag(tag: string): Project[] {
	return projects.filter((project) => project.tags.includes(tag));
}

// Export all unique tags
export const tags: string[] = Array.from(
	new Set(projects.flatMap((project) => project.tags))
).sort();
