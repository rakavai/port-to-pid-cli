import React from 'react';
import chalk from 'chalk';
const {render} = require('ink-testing-library');
import App from '../app';


describe('app', function () {
    describe('when there is a port is given', function () {
        describe('when there is a process listening for the port', function () {
            it('print out the port no', function () {
                const {lastFrame} = render(<App port={"45066"}/>);

                expect(lastFrame()).toEqual( chalk`Port {bold.green 45066} is being used by the following process:`);
            });
        });
    });
});
