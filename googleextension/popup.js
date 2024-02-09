// Function to send selected text to the API
function sendTextToAPI(selectedText) {
    // Replace this URL with your API endpoint
    const apiUrl = 'https://webhook-test.com/18e10e769596199db19322dea9b60269';

    // Replace this with your actual API request logic (e.g., fetch or XMLHttpRequest)
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectedText }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API response:', data);
        // Handle API response as needed
    })
    .catch(error => {
        console.error('Error sending text to API:', error);
    });
}

// Function to handle click event
// function handleClick() {
//     // Get selected text
//     chrome.tabs.executeScript({
//         code: "window.getSelection().toString();"
//     }, function(selection) {
//         const selectedText = selection[0];
//         // Display selected text in the popup
//         document.getElementById('selectedText').textContent = `Selected Text: ${selectedText}`;
//         // Send selected text to the API
//         sendTextToAPI(selectedText);
//     });
// }

function handleClick() {
    // Get custom text from input field
    const customText = document.getElementById('customText').value;
    // Send custom text to the API
    sendTextToAPI(customText);
}

// Add click event listener to handle button click
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendTextButton').addEventListener('click', handleClick);
});
