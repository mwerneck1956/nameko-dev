<script context="module" lang="ts">
	import { ROUTES } from './routes'
	import Input from '../components/common/Input/Input.svelte'
	import Select from '../components/common/Select/Select.svelte'
	import CurrencyInput from '../components/common/CurrencyInput/Input.svelte'
	import Button from '../components/common/Button/Button.svelte'
	import IconButton from '../components/common/IconButton/IconButton.svelte'
	import HomeIcon from '../icons/HomeIcon.svelte'
	import PropertyIcon from '../icons/Property.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<!-- {#each Object.entries(ROUTES) as [name, route]}
		<a class="mx-2 text-blue-400 underline" href={route}>{name}</a>
	{/each} -->

	<div class="grid lg:grid-cols-2 gap-20 grid-cols-1">
		<div>
			<h1
				class="text-4xl font-amplitudeWide font-normal text-dark-gray text-shadow-md"
			>
				Property Details
			</h1>
			<p
				class="text-dark-gray text-lg font-normal leading-6 font-amplitudeWide max-w-md mt-2"
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>

			<form class="mt-[45px]">
				<Input label="Property Name" />
				<Input
					placeholder="21 Jump Street, Los Angeles, California"
					label="Address"
				/>
			</form>
		</div>

		<div>
			<img
				src="/images/house.svg"
				class="min-w-[340px] min-h-[220px]"
				alt="house"
			/>
		</div>
	</div>

	<div class="mt-6">
		<h3 class="font-amplitudeWide mb-6 font-semibold text-dark-gray">
			Property Type
		</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			<IconButton icon={HomeIcon} label="Single-Family" />
			<IconButton icon={PropertyIcon} label="Multi-Family" />
			<IconButton icon={HomeIcon} label="Townhome" />
			<IconButton icon={PropertyIcon} label="Condo" />
		</div>
	</div>

	<div class="my-6">
		<h3 class="font-amplitudeWide mb-6 font-semibold text-dark-gray">
			Unit info
		</h3>

		<div
			class="bg-white-0 p-4 shadow-[0_4px_16px_0px_rgba(0,0,0,0.10)]
					border border-solid rounded border-medium-gray w-full
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5
					"
		>
			<Input label="Unit Name" />
			<CurrencyInput label="Rent" />
			<CurrencyInput label="Deposit" />
			<Input label="Lease Length (months)" />
			<Select label="beds" />
		</div>
	</div>

	<footer class="flex justify-between mt-[54px]">
		<Button variant="primary">back</Button>
		<Button variant="secondary">continue</Button>
	</footer>
</main>
