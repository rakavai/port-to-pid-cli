#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app';

 meow(`
	Usage
	  $ find-pid-from-port

	Options
		--name  Your name

	Examples
	  $ find-pid-from-port --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});

render(<App port={"8000"}/>);
