import React from 'react';

import { ReplAuthButton } from './lib';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ReplAuthButton theme='dark' />
				<br />
				<ReplAuthButton theme='light' />
			</React.Fragment>
		)
	}
}

export default App;