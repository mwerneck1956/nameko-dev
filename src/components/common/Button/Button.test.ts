import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button tests', () => {
	test('Renders button', async () => {
		const onClick = vi.fn();
		render(Button, { label: 'test', onClick });

		const button = screen.getByRole('button', {
			name: 'test'
		});
		expect(button.textContent).toBe('test');

		await userEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
