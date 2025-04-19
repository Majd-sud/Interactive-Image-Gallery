// Wait for the DOM to be fully loaded before executing the script
$(document).ready(function() {
    let currentIndex = 0; // Initialize the index of the currently displayed image

    const images = $('.gallery-image'); // Select all elements with the class 'gallery-image'
    const total = images.length; // Get the total number of images in the gallery
  
    images.hide(); // Initially hide all images
    images.eq(currentIndex).show(); // Show the first image in the gallery

    /**
     * Displays an image from a collection of images by its index.
     * Hides all other images and fades in the selected image.
     *
     * @param {number} index - The index of the image to display in the collection.
     */
    function showImage(index) {
        images.hide(); // Hide all images
        $(images[index]).fadeIn(300); // Fade in the image at the specified index
    }
  
    // Event listener for the "Next" button
    $('#nextBtn').click(function() {
        currentIndex = (currentIndex + 1) % total; // Increment the index and wrap around if it exceeds the total
        showImage(currentIndex); // Display the next image
    });
  
    // Event listener for the "Previous" button
    $('#prevBtn').click(function() {
        currentIndex = (currentIndex - 1 + total) % total; // Decrement the index and wrap around if it goes below zero
        showImage(currentIndex); // Display the previous image
    });
});