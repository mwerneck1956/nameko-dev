import type { ConstructorOfATypedSvelteComponent } from 'svelte';

export interface ButtonProps {
	label: string;
	type: string;
	placeholder: string;
	icon?: ConstructorOfATypedSvelteComponent;
	onClick?: (params: unknown) => void;
}
