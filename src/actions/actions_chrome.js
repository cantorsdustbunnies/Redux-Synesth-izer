import { INIT, SAVE_TO_STORAGE, REMOVE_FROM_STORAGE } from './types_chrome';

import { default_state } from '../chrome_extension/default_state';

// Each function that accesses chrome's storage will conditionally spoof it inside of redux.

export function emitChromeStorageAction(data, type) {
	return {
		type: type,
		payload: data,
	};
}

export const initFromChromeStorage = () => {
	if (chrome.storage) {
		return dispatch => {
			chrome.storage.sync.get('state', data => {
				dispatch(emitChromeStorageAction(data.state, INIT));
			});
		};
	} else {
		return dispatch => {
			dispatch(emitChromeStorageAction(default_state, INIT));
		};
	}
};

export const saveToChromeStorage = (key, value) => {
	if (chrome.storage) {
		return dispatch => {
			chrome.storage.sync.get('state', data => {
				const newState = Object.assign({}, data.state, { [key]: value });
				chrome.storage.sync.set({ state: newState }, () => {
					dispatch(emitChromeStorageAction({ [key]: value }, SAVE_TO_STORAGE));
				});
			});
		};
	} else {
		return dispatch => {
			dispatch(emitChromeStorageAction({ [key]: value }, SAVE_TO_STORAGE));
		};
	}
};
