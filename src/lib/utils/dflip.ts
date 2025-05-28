import type { FlipBookOptions } from '$lib/utils/types';

// Base URL for dflip assets
const DFLIP_BASE_URL = '/dflip';

// Function to ensure dflip is loaded
export async function ensureDflipLoaded(): Promise<void> {
	// Load jQuery if not already loaded
	if (!window.jQuery) {
		const jQuery = await import('jquery');
		window.jQuery = jQuery.default;
		window.$ = jQuery.default;
	}

	// Load dflip CSS if not already loaded
	if (!document.querySelector('link[href="/dflip/css/dflip.min.css"]')) {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = `${DFLIP_BASE_URL}/css/dflip.min.css`;
		document.head.appendChild(link);
	}

	// Load dflip JS if not already loaded
	if (typeof window.jQuery.fn.flipBook !== 'function') {
		await new Promise<void>((resolve, reject) => {
			const script = document.createElement('script');
			script.src = `${DFLIP_BASE_URL}/js/dflip.min.js`;
			script.onload = () => {
				// Wait a bit to ensure the plugin is properly initialized
				setTimeout(() => {
					if (typeof window.jQuery.fn.flipBook === 'function') {
						resolve();
					} else {
						reject(new Error('dflip plugin not properly initialized'));
					}
				}, 100);
			};
			script.onerror = () => reject(new Error('Failed to load dflip.js'));
			document.head.appendChild(script);
		});
	}
}

// Function to initialize a flipbook
export async function initializeFlipbook(
	elementId: string,
	source: string,
	options: FlipBookOptions = {}
): Promise<void> {
	await ensureDflipLoaded();

	// Wait for jQuery to be available
	if (!window.jQuery) {
		throw new Error('jQuery is not available');
	}

	// Double check that flipBook is available
	if (typeof window.jQuery.fn.flipBook !== 'function') {
		throw new Error('dflip plugin is not available');
	}

	// Initialize the flipbook
	const $element = window.jQuery(`#${elementId}`);
	if (!$element.length) {
		throw new Error(`Element with id "${elementId}" not found`);
	}

	// Default configuration with Material Symbols
	const defaultOptions: FlipBookOptions = {
		// Basic display options
		height: '100%',
		// 3D options
		webgl: true,
		webglShadow: true,
		// Sound options
		soundEnable: false,
		// Animation options
		duration: 500,
		// Background
		backgroundColor: '#f8f8f8',
		// Disable scroll wheel zoom
		scrollWheel: false,
		// Navigation bar customization
		allControls: 'altPrev,pageNumber,altNext,outline,thumbnail,zoomIn,zoomOut,fullScreen',
		// Default Material Symbols icons
		icons: {
			altprev: 'material-symbols-outlined ms-prev',
			altnext: 'material-symbols-outlined ms-next',
			prev: 'material-symbols-outlined ms-prev',
			next: 'material-symbols-outlined ms-next',
			thumbnail: 'material-symbols-outlined ms-thumbnail',
			zoomin: 'material-symbols-outlined ms-zoom-in',
			zoomout: 'material-symbols-outlined ms-zoom-out',
			fullscreen: 'material-symbols-outlined ms-fullscreen',
			close: 'material-symbols-outlined ms-close'
		},
		// Control bar position
		controlsPosition: 0, // DFLIP.CONTROLSPOSITION.BOTTOM (0 = bottom, 1 = top)
		// Padding around the flipbook
		paddingTop: 30,
		paddingLeft: 50,
		paddingRight: 50,
		paddingBottom: 80,
		// Asset paths
		pdfjsSrc: `${DFLIP_BASE_URL}/js/libs/pdf.min.js`,
		pdfjsWorkerSrc: `${DFLIP_BASE_URL}/js/libs/pdf.worker.min.js`,
		threejsSrc: `${DFLIP_BASE_URL}/js/libs/three.min.js`,
		mockupjsSrc: `${DFLIP_BASE_URL}/js/libs/mockup.min.js`,
		soundFile: `${DFLIP_BASE_URL}/sound/turn2.mp3`,
		imagesLocation: `${DFLIP_BASE_URL}/images`
	};

	// Merge user options with defaults (user options override defaults)
	const finalOptions = { ...defaultOptions, ...options };

	// Use the correct dflip API: $(element).flipBook(source, options)
	$element.flipBook(source, finalOptions);
}
