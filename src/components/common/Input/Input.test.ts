import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Input from './Input.svelte';

describe('Button tests', () => {
	test('Renders input', async () => {
		render(Input, {
			label: 'Input Test',
			id: 'test_input',
			testId: 'test_input',
			placeholder: 'test'
		});

		screen.getByText(/Input Test/i);
		const input = screen.getByPlaceholderText('test');

		expect(input.nodeName).toBe('INPUT');
	});

	test('it changes the input value', async () => {
		render(Input, {
			label: 'Input Test',
			id: 'test_input',
			testId: 'test_input',
			placeholder: 'test'
		});

		const input: HTMLInputElement = screen.getByPlaceholderText('test');
		await fireEvent.input(input, { target: { value: 'test' } });

		expect(input.value).toBe('test');
	});
});
