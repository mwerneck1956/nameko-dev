<script lang="ts">
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
	<input
		class="
      shadow appearance-none
      border rounded border-light-gray
      w-full py-4 px-3 text-gray-700 h-10
      outline-none
      placeholder-dark-gray font-amplitudeWide font-normal text-base
      "
		type="text"
		{placeholder}
	/>
</div>
