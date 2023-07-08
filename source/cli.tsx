#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app';

const cli = meow(`
	Usage
	  $ find-pid-from-port

	Options
		--name  Your name

	Examples
	  $ find-pid-from-port --name=Jane
	  Hello, Jane
`, {
	flags: {
		port: {
			type: 'string',
            isRequired: true
		}
	}
});

render(<App port={cli.flags.port}/>);
