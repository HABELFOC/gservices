const INITIAL_STATE = {
	AdsState: true,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'AD_RELOAD':
			return { ...state, AdsState: action.payload };
		default:
			return state;
	}
};
