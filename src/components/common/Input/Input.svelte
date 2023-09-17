<script lang="ts">
	import type { InputProps } from './index';

	export let { label, placeholder, type, customClass, id, testId }: InputProps = {
		label: '',
		type: 'text',
		placeholder: '',
		customClass: '',
		id: '',
		testId: ''
	};
</script>

<div class="mb-4">
	<label class="block text-dark-gray text-base font-semibold font-amplitudeWide mb-[4px]" for={id}>
		{label}
	</label>
	<input
		aria-label={label}
		class="
      shadow appearance-none
      border rounded border-light-gray
      w-full py-4 px-3 text-gray-700 h-10
      outline-none
      placeholder-dark-gray font-amplitudeWide font-normal text-base
		{customClass}
      "
		{id}
		{type}
		{placeholder}
		name={label}
		data-test-id={testId}
	/>
</div>
