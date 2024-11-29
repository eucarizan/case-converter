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
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value);
    element.download = 'text.txt';
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function addText() {
    textarea.value = "lorem ipsum is simply dummy text of the printing and typesetting industry. " +
      "lorem ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a gallery of type and scrambled it to make a type specimen book. " +
      "it has survived not only five centuries, but also the leap into electronic typesetting, " + 
      "remaining essentially unchanged. it was popularised in the 1960s with the release of letraset " +
      "sheets containing lorem ipsum passages, and more recently with desktop publishing software " +
      "like aldus pagemaker including versions of lorem ipsum."
}

// Add event listeners to the buttons
document.getElementById('upper-case').addEventListener('click', toUpperCase);
document.getElementById('lower-case').addEventListener('click', toLowerCase);
document.getElementById('proper-case').addEventListener('click', toProperCase);
document.getElementById('sentence-case').addEventListener('click', toSentenceCase);
document.getElementById('save-text-file').addEventListener('click', download);
document.getElementById('lorem-ipsum').addEventListener('click', addText);
