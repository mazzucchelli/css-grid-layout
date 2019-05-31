const getScrollbarWidth = () => {
    'use strict';
    // Create a temporary div container and append it into the body
    const container = document.createElement('div');
    // Append the container in the body
    document.body.appendChild(container);
    // Force scrollbar on the container
    container.style.overflow = 'scroll';

    // Add ad fake div inside the container
    const inner = document.createElement('div');
    container.appendChild(inner);

    // Calculate the width based on the container width minus its child width
    const width = container.offsetWidth - inner.offsetWidth;
    // Remove the container from the body
    document.body.removeChild(container);

    return width;
};

// Get the scrollbar dimension
const scrollbarWidth = getScrollbarWidth();
// Set a custom property with the value we calculated
document.documentElement.style.setProperty('--scrollbar', `${scrollbarWidth}px`);

console.log('Mario say welcome!');
