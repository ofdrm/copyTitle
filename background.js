chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Toggle the pinned status
        var current = tabs[0];
        alert(current.title + ", " + current.url);

        // navigator.clipboard.writeText(current.title + ", " + current.url)
        // .then(() => {
        //     console.log('Text copied to clipboard');
        // })
        // .catch(err => {
        //     // This can happen if the user denies clipboard permissions:
        //     console.error('Could not copy text: ', err);
        // });
    });
});