#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app';

const cli = meow(`
	Usage
	  $ port2pid <port>

	Examples
	  $ port2pid 8080
	  Port 8080 is being used by the following process: 28922
`);

const port = cli.input.at(0)
if (!port) {
    cli.showHelp()
}
render(<App port={port}/>);
