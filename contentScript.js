// This script runs in the context of the web page
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getUrl') {
        sendResponse({ url: document.URL });
    }
});
