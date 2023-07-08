import React, {FC, useEffect, useState} from 'react';
import {Text,} from 'ink';
import {exec} from "child_process";

const App: FC<{ port?: string }> = ({port}) => {
    const [pid, setPid] = useState<string>();
    useEffect(() => {
        if (!port) {
            return
        }
        getPidFromPort(port).then(resultPid => {
            setPid(resultPid)
        })
    }, [port])
    return (<Text>
        <Text>Port </Text>
        <Text color={"green"} bold>{port}</Text>
        <Text> is being used by the following process: {pid}</Text>
    </Text>);
};

function getPidFromPort(port: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`lsof -i :${port} -t`, (err, stdout, stderr) => {
            stdout && resolve(stdout)
            err && reject(err)
            stderr && reject(stderr)
        });
    })
}

module.exports = App;
export default App;
