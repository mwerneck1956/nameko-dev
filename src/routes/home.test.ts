import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import HomePage from './+page.svelte';

describe('Home test', () => {
	test('Renders correct information', () => {
		render(HomePage);

		screen.getByText('Property Details');
		screen.getByText(
			/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam./
		);
	});

	test('Must render correct propert type buttons', () => {
		render(HomePage);

		screen.getByRole('button', {
			name: /Single-Family/
		});

		screen.getByRole('button', {
			name: /Multi-Family/
		});

		screen.getByRole('button', {
			name: /Townhome/
		});

		screen.getByRole('button', {
			name: /Condo/
		});
	});

	test('Renders inputs', () => {
		render(HomePage);

		screen.getByRole('textbox', {
			name: 'Property Name'
		});
		screen.getByRole('textbox', {
			name: 'Address'
		});
		screen.getByRole('textbox', {
			name: 'Unit Name'
		});

		screen.getByRole('textbox', {
			name: 'Rent'
		});

		screen.getByRole('textbox', {
			name: 'Deposit'
		});

		screen.getByRole('textbox', {
			name: 'Lease Length (months)'
		});
	});

	test('Must render back and continue buttons', () => {
		render(HomePage);

		screen.getByRole('button', {
			name: /Back/i
		});

		screen.getByRole('button', {
			name: /Continue/i
		});
	});
});
