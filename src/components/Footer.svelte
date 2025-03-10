<script lang="ts">
	const TIMEZONE = 'Asia/Seoul';
	//for New York: 'America/New_York'

	const getGMTOffset = (timezone: string): string => {
		const offset = new Date()
			.toLocaleString('en-US', { timeZone: timezone, timeZoneName: 'shortOffset' })
			.split(' ')
			.pop();
		return offset || '';
	};

	let currentTime: Date;
	const updateTime = () => {
		currentTime = new Date();
	};

	setInterval(updateTime, 1000);
	updateTime();
</script>

<div class="footer">
	<div class="footer-1">
		<div class="footer-item-container">
			<div>Currently in 🇰🇷</div>
			<div class="time-display">
				{currentTime?.toLocaleDateString('en-US', {
					timeZone: TIMEZONE,
					month: 'short',
					day: 'numeric'
				})},
				{currentTime?.toLocaleTimeString('en-US', {
					timeZone: TIMEZONE,
					hour12: false,
					hour: '2-digit',
					minute: '2-digit'
				})} ({getGMTOffset(TIMEZONE)})
			</div>
		</div>
	</div>
	<div class="footer-2">
		<div class="footer-item-container">
			<div>email</div>
			<a href="mailto:me@rinchong.kim" class="footer-link">me@rinchong.kim</a>
		</div>
		<div class="footer-item-container">
			<div>socials</div>
			<a href="https://instagram.com/rinchong.kim/" class="footer-link">Instagram</a>
			<a href="https://www.linkedin.com/in/rinchong-kim/" class="footer-link">LinkedIn</a>
		</div>
		<div class="copyright">copyright © 2025 Rinchong Kim</div>
	</div>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		border-top: 2px solid var(--black);
	}

	.footer-1 {
		width: 100%;
		font-size: 1.5rem;
		padding: 1rem 0.5rem;
	}

	.footer-2 {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 1.5rem;
		padding: 1rem 0.5rem;
	}

	.footer-item-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-link {
		width: fit-content;
		font-size: 2rem;
		text-decoration: underline;
		color: var(--black);
		transition: all 0.2s ease-in-out;
	}

	.footer-link:hover {
		background-color: var(--main-color);
		color: white;
	}

	.time-display {
		font-size: 2rem;
	}

	@media (max-width: 768px) {
		.footer {
			flex-direction: column;
			gap: 0rem;
		}

		.footer-1 {
			font-size: 1rem;
		}

		.footer-2 {
			font-size: 1rem;
		}

		.footer-link {
			font-size: 1.5rem;
		}

		.time-display {
			font-size: 1.5rem;
		}
	}
</style>
