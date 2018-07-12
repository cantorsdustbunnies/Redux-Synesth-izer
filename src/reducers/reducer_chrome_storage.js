import { INIT, SAVE_TO_STORAGE } from '../actions/types_chrome';

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case INIT:
			return Object.assign({}, state, action.payload);
		case SAVE_TO_STORAGE:
			return Object.assign({}, state, action.payload);
	}

	return state;
}
