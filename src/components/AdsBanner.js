import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { reloadAds } from '../actions';
import { AdMobBanner } from 'react-native-admob';

globalTimeout = null;

class AdBanner extends Component{

	state = {
		myUnitID: 'ca-app-pub-6921611257043835/9773358292'
	};

	componentWillMount(){
		console.log('component has mounted');
	}


	renderContent(){
		if (globalTimeout != null){
			clearTimeout(globalTimeout);
		}
		globalTimeout = setTimeout(() => {
			globalTimeout = null;
			this.props.reloadAds(this.props.AdsState);
			console.log('ads reload action called! now');
		}, 20000);
		if (this.props.AdsState){
			return(
				<View>
					<Text style={styles.title}>My First Banner Ads</Text>
					<AdMobBanner
					adSize="banner"
					adUnitID={this.state.myUnitID}
					testDevices={[AdMobBanner.simulatorId]}
					onAdFailedToLoad={error => console.error(error)}
					/>
					<AdMobBanner
					adSize="banner"
					adUnitID={this.state.myUnitID}
					testDevices={[AdMobBanner.simulatorId]}
					onAdFailedToLoad={error => console.error(error)}
					/>
					<AdMobBanner
					adSize="banner"
					adUnitID={this.state.myUnitID}
					testDevices={[AdMobBanner.simulatorId]}
					onAdFailedToLoad={error => console.error(error)}
					/>
				</View>
			);
				
		} else {
			return (
			<View>
				<Text style={styles.title}>THIS IS ELSE CONTENT!</Text>
			</View>
			);
		}

		
		
	}


	render() {
		return this.renderContent();
	}

}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'red',
    fontSize: 30
  }
};



// I dont need this actually
function mapStateToProps(state, ownState){
	console.log('adState is')
	console.log(state.adState);
	const { AdsState } = state.adState;

	return { AdsState };
}


export default connect(mapStateToProps, {
reloadAds
})(AdBanner);