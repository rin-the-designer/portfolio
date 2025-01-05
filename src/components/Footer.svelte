<script lang="ts">
	// Create reactive time variable
	let currentTime: Date;

	// Update time every second
	const updateTime = () => {
		currentTime = new Date();
	};

	// Set up interval when component mounts
	setInterval(updateTime, 1000);
	updateTime(); // Initial call
</script>

<div class="footer">
	<div class="footer-1">
		<div class="time-display">
			EST: {currentTime?.toLocaleDateString('en-US', {
				timeZone: 'America/New_York',
				month: 'short',
				day: 'numeric'
			})}
			{currentTime?.toLocaleTimeString('en-US', {
				timeZone: 'America/New_York',
				hour12: false
			})}
			&nbsp;|&nbsp; KST: {currentTime?.toLocaleDateString('en-US', {
				timeZone: 'Asia/Seoul',
				month: 'short',
				day: 'numeric'
			})}
			{currentTime?.toLocaleTimeString('en-US', {
				timeZone: 'Asia/Seoul',
				hour12: false
			})}
		</div>
	</div>
	<div class="footer-2"></div>
</div>

<style>
	.time-display {
		font-family: 'JetBrains Mono', monospace;
		padding: 0.5rem;
		font-size: 2rem;
	}
</style>
