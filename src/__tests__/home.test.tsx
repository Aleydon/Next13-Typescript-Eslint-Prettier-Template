import { render } from '@testing-library/react';

import Home from '@/app/page';

it('should render Home Component page', () => {
	render(<Home />);
});

it('should gettext Hello World from h1', () => {
	render(<Home />);
	const element = document.querySelector('h1');
	expect(element?.textContent).toBe('Hello world!');
});
