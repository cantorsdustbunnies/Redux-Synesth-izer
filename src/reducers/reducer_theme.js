import { GET_THEME_DATA } from '../actions/types_theme';

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case GET_THEME_DATA:
			return Object.assign({}, state, action.payload);
	}
	return state;
}
