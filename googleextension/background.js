chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['contentScript.js']
    });
   });   
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    fetch('https://webhook-test.com/18e10e769596199db19322dea9b60269', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({text: request.text}),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
   });
   