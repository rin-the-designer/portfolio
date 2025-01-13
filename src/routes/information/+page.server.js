import { educations } from '$lib/AboutData.js';
import { experiences } from '$lib/AboutData.js';
import { activities } from '$lib/AboutData.js';
import { awards } from '$lib/AboutData.js';

export function load() {
	return {
		educationData: educations.map((education) => ({
			school: education.school,
			degree: education.degree,
			startYear: education.startYear,
			endYear: education.endYear,
			location: education.location,
			description: education.description,
			link: education.link
		})),
		experienceData: experiences.map((experience) => ({
			company: experience.company,
			role: experience.role,
			startYear: experience.startYear,
			endYear: experience.endYear,
			location: experience.location,
			description: experience.description,
			link: experience.link
		})),
		activitiesData: activities.map((activity) => ({
			title: activity.title,
			role: activity.role,
			role2: activity.role2,
			startYear: activity.startYear,
			endYear: activity.endYear,
			startYear2: activity.startYear2,
			endYear2: activity.endYear2,
			location: activity.location,
			description: activity.description,
			description2: activity.description2,
			link: activity.link
		})),
		awardsData: awards.map((award) => ({
			title: award.title,
			presenter: award.presenter,
			presenter2: award.presenter2,
			year: award.year,
			description: award.description,
			description2: award.description2
		}))
	};
}
