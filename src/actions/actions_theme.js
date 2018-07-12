import { GET_CURRENT_THEME, INIT_NEW_THEME } from './types_theme';
import { emitChromeStorageAction } from './actions_chrome';
import { default_state } from '../chrome_extension/default_state';
import { unstyled } from '../chrome_extension/themes';

export const initSelectedTheme = () => {
	if (chrome.storage) {
		return dispatch => {
			chrome.storage.sync.get('state', data => {
				dispatch(emitChromeStorageAction(data.state.selected_theme, GET_CURRENT_THEME));
			});
		};
	} else {
		console.log(default_state.selected_theme);
		return dispatch => dispatch(emitChromeStorageAction(default_state.selected_theme, GET_CURRENT_THEME));
	}
};

export const initNewTheme = () => {
	return dispatch =>
		dispatch({
			type: INIT_NEW_THEME,
			payload: { data: unstyled, name: 'Unstyled', isDefault: true },
		});
};
