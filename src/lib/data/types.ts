export interface TeamMember {
	name: string;
	role?: string;
	portfolio?: string;
}

export interface CompanyInfo {
	name: string;
	link?: string;
}

export type ProjectType = 'Work' | 'Team' | 'Individual';

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
	roles?: string[];
	tools: string[];
	intro: string;
	projectType: ProjectType;
	team?: TeamMember[];
	company?: CompanyInfo;
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
