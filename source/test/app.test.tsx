import React from 'react';
import chalk from 'chalk';
import App from '../app';
import {ChildProcess, exec} from 'child_process'

const {render} = require('ink-testing-library');


describe('app', function () {
    describe('when there is a port is given', function () {
        describe('when there is a process listening for the port', function () {
            let childProcess: ChildProcess, pid: string
            beforeEach(async function () {
                childProcess = exec("nc -l 45066 & echo $!");

                pid = await new Promise(res => {
                    childProcess.stdout?.on('data', function (data) {
                        res(data)
                    });
                });
            });

            it('print out the port no', async function () {
                const {lastFrame} = render(<App port={"45066"}/>);

                await waitFor(() => {
                    expect(lastFrame()).toEqual(chalk`Port {bold.green 45066} is being used by the following process: ${pid}`);
                });
            });

            afterEach(function () {
                childProcess.kill()
                process.kill(parseInt(pid))
            });
        });
    });

    describe('when there is no process listening for the port', function () {
        it('prints out that - no process found for the port', async function () {
            const {lastFrame} = render(<App port={"50666"}/>);

            await waitFor(() => {
                expect(lastFrame()).toEqual(chalk`No process was found for the port {bold.green 50666}`);
            });
        });
    });
});

async function waitFor(toTest: () => void) {
    for (let i = 0; ; i++) {
        await new Promise(res => setTimeout(res, 10))
        try {
            toTest();
            break
        } catch (e) {
            if (i > 100) {
                throw e
            }
        }
    }
}
