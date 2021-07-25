/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		// If you want to use on:beforeinstallprompt
		onclick_outside?: (event: any) => void;
	}
}

// Additional details about adding custom events in typescript are available here:
// https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
