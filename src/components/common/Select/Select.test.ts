import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Select from './Select.svelte';

const selectOptions = [
	{
		name: '1',
		value: '1'
	},
	{
		name: '2',
		value: '2'
	}
];

describe('Select tests', () => {
	test('Display a dropdown when the select option is clicked', async () => {
		render(Select, { options: selectOptions, name: 'select-test', label: 'test' });

		screen.getByText('test');

		const selectEl = screen.getByRole('button', {
			name: 'select-test'
		});

		await fireEvent.click(selectEl);

		//Expect that the dropdown is visible on the screen
		const optionEl = screen.getByText('1');
		await fireEvent.click(optionEl);

		const valueEl = screen.getByLabelText(`select-test-value`);
		expect(valueEl.textContent).toBe('1');
	});
});
