<script lang="ts">
	import Money from '../../../icons/Money.svelte'
	import type { InputProps } from './index'

	export let { label, placeholder, type }: InputProps = {
		label: '',
		type: 'text',
		placeholder: '',
	}
</script>

<div class="mb-4">
	<label
		class="block text-dark-gray text-base font-semibold font-amplitudeWide mb-[4px]"
		for="username"
	>
		{label}
	</label>

	<div
		class="flex items-center justify-between border rounded border-light-gray shadow px-[12px]"
	>
		<Money />

		<input
			class="
			appearance-none
		 	py-4 px-3 text-gray-700 h-10
			w-3/5
			outline-none
			placeholder-dark-gray font-amplitudeWide font-normal text-base
			"
			type="text"
			{placeholder}
		/>

		/mo
	</div>
</div>
