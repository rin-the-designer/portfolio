// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Declare jQuery globally
	interface Window {
		jQuery: typeof import('jquery');
		$: typeof import('jquery');
	}
}

export {};
