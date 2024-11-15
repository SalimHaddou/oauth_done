const interaction_table_header = document.querySelector('#interaction_table_header');
if (interaction_table_header?.textContent?.includes('You can close this page now.')) {
    const TIMEOUT = 1000; // 1000 ms = 1 sec
    setTimeout(() => {
        chrome.runtime.sendMessage({closeThis: true});
    }, TIMEOUT);
}