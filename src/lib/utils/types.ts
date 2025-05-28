// Extend the Window interface to include jQuery
declare global {
	interface Window {
		jQuery: typeof import('jquery');
		$: typeof import('jquery');
	}

	// Extend JQuery interface globally
	interface JQuery {
		flipBook(source: string | string[], options?: FlipBookOptions): JQuery;
	}
}

// Basic type for dflip options
export interface FlipBookOptions {
	// Source configuration (optional since it's passed separately)
	source?: {
		type: 'pdf' | 'images' | 'html';
		url: string;
	};

	// Basic display options
	height?: number | string;
	width?: number | string;
	webgl?: boolean;
	webglShadow?: boolean;

	// Sound options
	soundEnable?: boolean;

	// Navigation and UI options
	autoEnableOutline?: boolean;
	autoEnableThumbnail?: boolean;
	overwritePDFOutline?: boolean;
	showDownloadControl?: boolean;
	showSearchControl?: boolean;
	showPrintControl?: boolean;

	// Animation options
	duration?: number;

	// Layout options
	direction?: number; // DFLIP.DIRECTION.LTR (1) or DFLIP.DIRECTION.RTL (2)
	pageMode?: number; // DFLIP.PAGE_MODE values
	singlePageMode?: number; // DFLIP.SINGLE_PAGE_MODE values

	// Styling options
	backgroundColor?: string;
	forceFit?: boolean;
	transparent?: boolean;
	hard?: string; // "all", "none", "cover"

	// Auto play options
	autoPlay?: boolean;
	autoPlayDuration?: number;
	autoPlayStart?: boolean;

	// Texture settings
	maxTextureSize?: number;
	minTextureSize?: number;
	rangeChunkSize?: number;

	// Icons configuration
	icons?: {
		[key: string]: string;
	};

	// Text translations
	text?: {
		[key: string]: string;
	};

	// Controls configuration
	allControls?: string;
	moreControls?: string;
	hideControls?: string;
	controlsPosition?: number; // DFLIP.CONTROLSPOSITION values

	// Padding options
	paddingTop?: number;
	paddingLeft?: number;
	paddingRight?: number;
	paddingBottom?: number;

	// Interaction options
	scrollWheel?: boolean;
	zoomRatio?: number;
	pageSize?: number; // DFLIP.PAGE_SIZE values

	// Callbacks
	onCreate?: (flipBook: any) => void;
	onCreateUI?: (flipBook: any) => void;
	onFlip?: (flipBook: any) => void;
	beforeFlip?: (flipBook: any) => void;
	onReady?: (flipBook: any) => void;

	// Asset paths (these are set automatically by the utility)
	pdfjsSrc?: string;
	pdfjsWorkerSrc?: string;
	threejsSrc?: string;
	mockupjsSrc?: string;
	soundFile?: string;
	imagesLocation?: string;

	// Allow for any additional dflip options
	[key: string]: any;
}
