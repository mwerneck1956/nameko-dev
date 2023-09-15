<script lang="ts">
	import type { SelectProps } from './index';
	import ChevronDown from '../../../icons/ChevronDown.svelte';

	export let {
		label,
		icon,
		options = [],
		placeholder = '',
		value = 'Select',
		type = 'text',
		id
	}: Partial<SelectProps> = {};

	let dropdownOpen = false;

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function onOptionClick(optionValue: string) {
		value = optionValue;
		toggleDropdown();
	}
</script>

<div class="mb-4">
	<label
		class="block text-dark-gray text-base font-semibold font-amplitudeWide mb-[4px]"
		for="username"
	>
		{label}
	</label>

	<div class="w-full relative inline-block text-left">
		<div>
			<button
				on:click={toggleDropdown}
				type="button"
				class="flex items-center justify-between border rounded border-light-gray shadow px-[12px] w-full h-[48px]"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				<div
					class="flex justify-between gap-2 font-amplitudeWideBook font-normal text-base text-blue-navy"
				>
					{#if icon}
						<svelte:component this={icon} />
					{/if}

					{value}
				</div>

				<ChevronDown />
			</button>
		</div>

		{#if dropdownOpen}
			<div
				class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
			>
				<div class="py-1" role="none">
					{#each options as option}
						<option
							class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
							role="menuitem"
							tabindex="-1"
							on:click={() => onOptionClick(option.value)}
						>
							{option.name}
						</option>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
