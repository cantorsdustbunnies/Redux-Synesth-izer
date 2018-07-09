import { combineReducers } from 'redux';
import ChromeReducer from './reducer_chrome_storage';
import ThemeReducer from './reducer_theme';

const rootReducer = combineReducers({
	chrome: ChromeReducer,
	theme: ThemeReducer,
});

export default rootReducer;
