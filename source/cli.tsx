#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app';

const cli = meow(`
	Usage
	  $ find-pid-from-port --port  Port

	Options
		--port  Port

	Examples
	  $ find-pid-from-port --name=8080
	  Port 8080 is being used by the following process: 28922
`, {
	flags: {
		port: {
			type: 'string',
            isRequired: true
		}
	}
});

render(<App port={cli.flags.port}/>);
