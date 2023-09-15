<script lang="ts">
	import type { ButtonProps } from './index'

	export let { label, placeholder, type, icon }: ButtonProps = {
		label: '',
		type: 'text',
		placeholder: '',
	}
</script>

<button
	class="
		h-[70px] w-full
      border rounded border-light-gray
      text-dark-gray text-base font-amplitudeWide font-normal
		flex gap-3 items-center justify-center
      outline-none

		hover:border-purple hover:bg-light-purple hover:text-purple transition duration-400
      "
	type="button"
	id="username"
>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
	<span class="font-amplitudeWideMedium font-norma l">
		{label}
	</span>
</button>
