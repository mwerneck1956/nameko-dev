import { describe, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/svelte';
import Bath from '../../../icons/Bath.svelte';
import Button from './IconButton.svelte';

describe('Button tests', () => {
	test('Renders button', async () => {
		const onClick = vi.fn();
		render(Button, { label: 'test', icon: Bath, onClick });

		const button = screen.getByRole('button', {
			name: 'test'
		});

		await userEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	test('Renders an icon', () => {
		render(Button, { label: 'test', icon: Bath });

		screen.getByTestId('testId');
	});
});
