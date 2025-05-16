export interface Project {
	title: string;
	slug: string;
	thumbnail: string;
	coverimg: string;
	excerpt: string;
	tags: string[];
	date: {
		year: number;
		month: number;
	};
	role: string;
	tools: string;
	intro: string;
}

export interface Archive {
	title: string;
	thumbnail: string;
	mainImage: string;
	slug: string;
	tags: string[];
	date: {
		year: number;
		month: number;
	};
	intro: string;
	iframe?: string;
}
