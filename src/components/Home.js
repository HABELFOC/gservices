import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Button } from './common';
import { AdMobBanner } from 'react-native-admob';

class Home extends Component {

	state = {
		myUnitID: 'ca-app-pub-6921611257043835/9773358292',
	};

	render() {
		return(
			<View>
				<View style={styles.toBar}>
					<Text style={styles.topTitle}>
						GServices
					</Text>
				</View>

				<View style={{height: 50}}>
					<AdMobBanner
					adSize="banner"
					adUnitID={this.state.myUnitID}
					testDevices={[AdMobBanner.simulatorId]}
					onAdFailedToLoad={error => console.error(error)}
					/>
				</View>

				

				<View style={styles.infoContiner}>
					<Text style={styles.infoTitle}>IP Address:</Text>
					<Text style={styles.infoTitle}>Country: </Text>
					<Text style={styles.infoTitle}>Android Version: </Text>
				</View>

				<View style={styles.impressOption}>
					<Button onPress={() => console.log('button pressed!')}>
						Start 3 Banners + Interstitial Auto Reload
					</Button>
					<Button onPress={() => console.log('button pressed!')}>
						Start 6 Banners + Interstitial Auto Reload
					</Button>
					<Button onPress={() => console.log('button pressed!')}>
						Start 9 Banners + Interstitial Auto Reload
					</Button>
				</View>


				<View style={{alignItems: 'center', marginTop: 60}}>
					<Button onPress={() => console.log('settings btn pressed!')} textStyle={{color:'#111'}} borderStyle={{borderColor: '#111'}}>
						Settings
					</Button>
				</View>
			</View>
			
		);
	}
}


const styles = {
	toBar: {
		alignItems: 'center',
		elevation: 5,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: '#6BDEFF'
	},
	topTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#2F3193'
	},
	infoContiner: {
		margin: 50,
		padding: 10,
		backgroundColor: '#FF2B3C'
	},
	infoTitle: {
		color: '#fff',
		fontSize: 14
	},
	impressOption: {
		alignItems: 'center'
	}
};

export default Home;
