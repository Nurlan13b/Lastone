// Add event listeners for drag and drop
const elements = document.querySelectorAll('.dropzone');

elements.forEach((element) => {
    element.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();
        const elementId = e.dataTransfer.getData('elementId');
        const targetDiv = e.target;
        moveElement(elementId, targetDiv.id);
    });
});

// Function to create a new element
document.getElementById('createButton').addEventListener('click', () => {
    const elementName = document.getElementById('elementName').value;
    if (elementName.trim() !== '') {
        createElement(elementName);
    }
});

// Function to create a new element and add it to the 'open' div and JSON file
function createElement(name) {
    const elementId = new Date().getTime().toString();
    const element = { id: elementId, name, status: 'open' };

    // Add the element to the 'open' div
    const openDiv = document.getElementById('open');
    const newElement = document.createElement('div');
    newElement.textContent = name;
    newElement.draggable = true;
    newElement.setAttribute('data-element-id', elementId);
    newElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('elementId', elementId);
    });
    openDiv.appendChild(newElement);

    // Add the element to the JSON file
    addToJsonFile(element);

    // Clear the input field
    document.getElementById('elementName').value = '';
}

// Function to move an element to a different div and update the JSON file
function moveElement(elementId, newStatus) {
    const element = document.querySelector(`[data-element-id="${elementId}"]`);
    const oldStatus = element.parentElement.id;

    if (oldStatus !== newStatus) {
        // Move the element to the new div
        document.getElementById(newStatus).appendChild(element);

        // Update the JSON file
        updateJsonFile(elementId, newStatus);
    }
}

// Function to update the JSON file with the new status
function updateJsonFile(elementId, newStatus) {
    // You'll need to implement server-side code (Node.js, for example) to update the JSON file.
    // Use a server route to update the element's status based on elementId and newStatus.
    // Example: POST request to /update-element with JSON data { elementId, newStatus }
    // Update the JSON file on the server accordingly.
    // For simplicity, I'm not showing the server-side code here.
}

// Function to add a new element to the JSON file
function addToJsonFile(element) {
    // You'll need to implement server-side code (Node.js, for example) to add the element to the JSON file.
    // Use a server route to add a new element with its id, name, and status (initially 'open').
    // Example: POST request to /add-element with JSON data { id, name, status: 'open' }
    // Add the element to the JSON file on the server accordingly.
    // For simplicity, I'm not showing the server-side code here.
}
