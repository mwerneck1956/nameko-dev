export interface ButtonProps {
	label: string;
	type: string;
	placeholder: string;
	variant?: 'primary' | 'secondary';
	onClick?: (params: unknown) => void;
}
