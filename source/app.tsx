import React, {FC} from 'react';
import {Text,} from 'ink';

const App: FC<{ port?: string }> = ({port}) => {
    return (<Text>
            <Text>Port </Text>
            <Text color={"green"} bold>{port}</Text>
            <Text> is being used by the following process:</Text>
        </Text>);
};

module.exports = App;
export default App;
