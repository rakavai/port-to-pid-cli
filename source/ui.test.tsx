import React from 'react';
import chalk from 'chalk';
import {render} from 'ink-testing-library';
import App from './ui';

describe('ss', function () {
	//const {render} = require('ink-testing-library');

	// it('greet unknown user', () => {
	// 	const {lastFrame} = render(<></>);
	//
	// 	expect(lastFrame()).toEqual( chalk`Hello, {green Stranger}`);
	// });

	it('greet user with a name', () => {
		const {lastFrame} = render(<App name="Jane"/>);

		expect(lastFrame()).toEqual( chalk`Hello, {green Jane}`);
	});
});
