//receive message from background script
console.log('content script working');

chrome.runtime.onMessage.addListener(getState);

function getState(request, sender, sendResponse) {
	console.log(request.state);
	let content = document.getElementsByClassName('content');
	content[0].style.backgroundColor = parseBackground(request.state.background_color);
}

const parseBackground = colorObj => {
	return `rgba(${colorObj.r}, ${colorObj.g}, ${colorObj.b}, ${colorObj.a})`;
};
