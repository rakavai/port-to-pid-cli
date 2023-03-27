import React, {FC, useState} from 'react';
import {Text} from 'ink';

const App: FC<{name?: string}> = ({name = 'Stranger'}) => {
	const [str, setStr] = useState(name);
	setTimeout(()=>setStr("Some other name"), 3000)
	return (
		<Text>
			Hello, <Text color="green">{str}</Text>
		</Text>
	);
};

module.exports = App;
export default App;
