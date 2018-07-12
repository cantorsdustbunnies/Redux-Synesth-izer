import { GET_CURRENT_THEME, INIT_NEW_THEME } from '../actions/types_theme';

const DEFAULT_STATE = {
	current_theme: [],
};

export default function(state = DEFAULT_STATE, action) {
	console.log(action.type, action.payload);
	switch (action.type) {
		case GET_CURRENT_THEME:
			return { ...state, current_theme: action.payload };
		case INIT_NEW_THEME:
			return { ...state, current_theme: action.payload };
	}
	return state;
}
