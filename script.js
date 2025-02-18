//your code here!

// Get the ordered list element
const infiList = document.getElementById('infi-list');

// Function to create and append list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List Item ${infiList.children.length + 1}`;
        infiList.appendChild(listItem);
    }
}

// Initial load of 10 items
addListItems(10);

// Function to check if the user has scrolled to the bottom
function checkScroll() {
    // Check if the user has scrolled to the bottom of the list
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
        // User has scrolled to the bottom, add more items
        addListItems(2);
    }
}

// Event listener for scroll on the list
infiList.addEventListener('scroll', checkScroll);