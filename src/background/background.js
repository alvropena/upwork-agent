chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
            // You can add additional functionality here
            console.log('Extension activated');
        }
    });
});