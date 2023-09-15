<!-- <script lang="ts">
	import type { LabeledInputProps } from './index'
	import BedIcon from '../../../icons/bed.svelte'
	import ChevronDown from '../../../icons/ChevronDown.svelte'

	export let {
		label,
		icon,
		options = [],
		placeholder = '',
		value = '',
		type = 'text',
		readonly = false,
		id,
	}: Partial<LabeledInputProps> = {}

	let dropdownOpen = false

	function toggleDropdown() {
		console.log('called')

		dropdownOpen = !dropdownOpen
	}
</script>

<div>
	<label
		for={id}
		class="block text-dark-gray text-base font-semibold font-amplitudeWide mb-[4px]"
	>
		{label}
	</label>
	<button
		on:click={toggleDropdown}
		class="flex items-center justify-between p-3
				border rounded border-light-gray shadow h-[48px]"
	>
		<div class="flex items-end gap-2 h-full">
			<BedIcon />
			<span class="font-amplitudeWideBook font-normal text-base leading-6">
				Select
			</span>
		</div>
		<ChevronDown />
	</button>
	{#if dropdownOpen}
		<div>teste</div>
	{/if}
</div> -->

<script>
	//variable Init
	let count = 0
	//function to be called on click
	function incrementCount() {
		//incremtent
		count++
	}
</script>

<!-- the function will be called on click -->
<button on:click={incrementCount}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
