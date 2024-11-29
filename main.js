const textarea = document.getElementById('input');

// Function to convert text to upper case
function toUpperCase() {
    textarea.value = textarea.value.toUpperCase();
}

// Function to convert text to lower case
function toLowerCase() {
    // const textarea = document.getElementById('input');
    textarea.value = textarea.value.toLowerCase();
}

// Function to convert text to proper case (capitalize first letter of each word)
function toProperCase() {
    // const textarea = document.getElementById('input');
    textarea.value = textarea.value
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
}

// Function to convert text to sentence case (capitalize first letter of each sentence)
function toSentenceCase() {
    // const textarea = document.getElementById('input');
    textarea.value = textarea.value
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, char => char.toUpperCase());
}

function download() {
    let element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value);
    element.download = 'text.txt';
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Add event listeners to the buttons
document.getElementById('upper-case').addEventListener('click', toUpperCase);
document.getElementById('lower-case').addEventListener('click', toLowerCase);
document.getElementById('proper-case').addEventListener('click', toProperCase);
document.getElementById('sentence-case').addEventListener('click', toSentenceCase);
document.getElementById('save-text-file').addEventListener('click', download);
