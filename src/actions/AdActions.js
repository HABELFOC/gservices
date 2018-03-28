export const reloadAds = (Adstate) => {
	console.log('reloadAds action called! after 6 sec');
	return {
		type: 'AD_RELOAD',
		payload: !Adstate
	};
};