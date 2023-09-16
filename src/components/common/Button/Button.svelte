<script lang="ts">
	import type { ButtonProps } from './index';

	export let {
		label,
		placeholder,
		type,
		variant = 'primary',
		onClick
	}: ButtonProps = {
		label: '',
		type: 'text',
		placeholder: ''
	};

	const classNameByVariants = {
		primary: `h-[42px] w-[124px]
      border rounded-3xl border-dark-gray
      text-dark-gray text-base font-inter font-medium uppercase
      outline-none
		hover:opacity-80 transition-all duration-300 ease-in-out
		`,
		secondary: `
		h-[42px] w-[124px]
		border rounded-3xl
		border-purple-800 bg-purple-800 text-white-0 text-base font-inter font-medium uppercase
		hover:opacity-80 transition-all duration-300 ease-in-out
		`
	};
</script>

<button on:click={onClick} class={classNameByVariants[variant]} type="button" id="username">
	{label}
</button>
