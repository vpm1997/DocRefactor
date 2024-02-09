const extractedText = document.body.innerText; // Simplistic example, might need adjustments
chrome.runtime.sendMessage({text: extractedText});