import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Components
import AdsBanner from './components/AdsBanner';
import Home from './components/Home';

export default class App extends Component {
	render() {
		return (
			<Provider
				store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
			>
				<View style={styles.container}>
					<Home />
				</View>
			</Provider>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#3DD5FF'
	},
};
