// Load JSON image configuration
const imageConfig = require('./imageConfig.json');

// Function to get image by name
function getImage(name) {
    return imageConfig[name] || defaultImage; // defaultImage should be defined elsewhere
}

// Example function modification to use images from JSON data
function displayImage(name) {
    const imagePath = getImage(name);
    // code to display image using imagePath
}

// Other existing functions can be modified similarly to utilize images from JSON