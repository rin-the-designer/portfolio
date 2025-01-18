<script lang="ts">
	interface Education {
		school: string;
		degree: string;
		startYear: string;
		endYear: string;
		location: string;
		description: string;
		link: string;
	}
	export let educations: Education[];

	interface Experience {
		company: string;
		role: string;
		startYear: string;
		endYear: string;
		location: string;
		description: string[];
		link: string;
	}
	export let experiences: Experience[];

	interface Activity {
		title: string;
		role: string;
		role2?: string;
		startYear: string;
		endYear: string;
		startYear2?: string;
		endYear2?: string;
		location: string;
		description: string[];
		description2?: string[];
		link?: string;
	}
	export let activities: Activity[];

	interface Award {
		title: string;
		presenter: string;
		presenter2?: string;
		year: string;
		description: string[];
		description2?: string[];
	}
	export let awards: Award[];
</script>

<div class="about-container">
	<div class="about-category" style="border-top: none;">
		<h2>About</h2>
		<div class="category-items">
			<div class="category-item">
				<div class="category-sub-item">
					<h3>
						Rinchong <span style="color: var(--main-color)">(Rin)</span> Kim · 김인종 · 金麟鍾
					</h3>
					<h3 style="padding-bottom: 5rem;">
						is a Korean designer based in New York, interested in how people interact with digital
						products. He is passionate about learning new technologies and finding ways to make
						design more intuitive, inclusive, and interactive.
					</h3>
					<div>
						<h3><a href="/files/RinKim-Resume.pdf">Résumé PDF</a></h3>
						<h3><a href="mailto:me@rinchong.kim">me@rinchong.kim</a></h3>
						<h3><a href="https://www.linkedin.com/in/rinchong-kim/">LinkedIn</a></h3>
						<h3><a href="https://www.instagram.com/rinchong.kim/">Instagram</a></h3>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="about-category">
		<h2>Education</h2>
		<div class="category-items">
			{#each educations as education}
				<div class="category-item">
					<div class="category-sub-item">
						{#if education.link}
							<h3><a href={education.link} target="_blank">{education.school}</a></h3>
						{:else}
							<h3>{education.school}</h3>
						{/if}
						<p>{education.location}</p>
						<p>{education.startYear} - {education.endYear}</p>
					</div>
					<div class="category-sub-item">
						<h3>{education.degree}</h3>
						<p>{education.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="about-category">
		<h2>Experience</h2>
		<div class="category-items">
			{#each experiences as experience}
				<div class="category-item">
					<div class="category-sub-item">
						{#if experience.link}
							<h3><a href={experience.link} target="_blank">{experience.company}</a></h3>
						{:else}
							<h3>{experience.company}</h3>
						{/if}
						<p>{experience.location}</p>
						<p>{experience.startYear} - {experience.endYear}</p>
					</div>
					<div class="category-sub-item">
						<h3>{experience.role}</h3>
						<ul>
							{#each experience.description as description}
								<li>{description}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="about-category">
		<h2>Activities</h2>
		<div class="category-items">
			{#each activities as activity}
				<div class="category-item">
					<div class="category-sub-item">
						{#if activity.link}
							<h3><a href={activity.link} target="_blank">{activity.title}</a></h3>
						{:else}
							<h3>{activity.title}</h3>
						{/if}
						<p>{activity.location}</p>
						<p>{activity.startYear} - {activity.endYear}</p>
						{#if activity.startYear2}
							<p>{activity.startYear2} - {activity.endYear2}</p>
						{/if}
					</div>
					<div class="category-sub-item">
						<h3>{activity.role}</h3>
						<ul>
							{#each activity.description as description}
								<li>{description}</li>
							{/each}
						</ul>
						{#if activity.role2}
							<h3 style="padding-top: 2rem;">{activity.role2}</h3>
						{/if}
						{#if activity.description2}
							<ul>
								{#each activity.description2 as description2}
									<li>{description2}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="about-category">
		<h2>Awards</h2>
		<div class="category-items">
			{#each awards as award}
				<div class="category-item">
					<div class="category-sub-item">
						<h3>{award.title}</h3>
						<p>{award.year}</p>
					</div>
					<div class="category-sub-item">
						<h3>{award.presenter}</h3>
						{#each award.description as description}
							<p>{description}</p>
						{/each}
						{#if award.description2}
							<h3 style="padding-top: 2rem;">{award.presenter2}</h3>
							{#each award.description2 as description2}
								<p>{description2}</p>
							{/each}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.about-container {
		display: flex;
		flex-direction: column;
	}

	.about-category {
		padding: 0.5rem 0 0.5rem 0.5rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		border-top: 2px solid var(--black);
	}

	.category-items {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.category-item {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		border-bottom: 1px solid var(--black);
		padding: 2rem 1rem 2rem 0;
	}

	.category-items > .category-item:last-child {
		border-bottom: none;
	}

	.category-sub-item {
		width: 100%;
	}

	.about-category h2 {
		font-size: 1.5rem;
		width: 50%;
		padding-top: 2rem;
		color: var(--main-color);
	}

	.category-item h3 {
		font-size: 1.25rem;
	}

	.category-item h3 a {
		text-decoration: underline;
		transition: all 0.2s ease-in-out;
	}

	.category-item h3 a:hover {
		background-color: var(--main-color);
		color: white;
	}

	ul {
		list-style-type: disc;
		padding-left: 1rem;
	}

	li {
		padding-top: 0.5rem;
	}

	p {
		padding-top: 0.5rem;
	}

	@media (max-width: 1024px) {
		.category-item {
			flex-direction: column;
			gap: 2rem;
		}
	}

	@media (max-width: 768px) {
		.about-category {
			flex-direction: column;
			padding: 0;
		}

		.category-item {
			padding: 3rem 1rem;
		}

		.about-category h2 {
			font-size: 1.5rem;
			padding: 1rem;
		}
	}
</style>
