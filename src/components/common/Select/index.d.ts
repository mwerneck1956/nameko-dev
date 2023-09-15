export interface SelectProps {
	label: string;
	type: string;
	placeholder: string;
	icon?: ConstructorOfATypedSvelteComponent;
	options?: {
		name: string;
		value: string;
	}[];
	icon?: string;
	value: string;
	id: string;
}
