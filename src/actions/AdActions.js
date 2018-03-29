export const reloadAds = Adstate => {
	console.log('reloadAds action called! after 20 sec');
	return {
		type: 'AD_RELOAD',
		payload: !Adstate,
	};
};
