// to handle the selection change event
document.getElementById("pixels").addEventListener("change", function() {
    var selectedValue = this.value;
    var imageUrl = getImageUrl(selectedValue);
    document.getElementById("pixelsImg").src = imageUrl;
});

// Function to get the image URL based on the selected numerical value
function getImageUrl(value) {
    var imageUrls = {
        "144": "moon144.jpeg",
        "240": "moon240.jpeg",
        "360": "moon360.jpeg",
        "480": "moon480.jpeg",
        "720": "moon720.jpeg",
        "1080": "moon1080.jpg"
    }
    // Return the corresponding image URL
    return imageUrls[value];
}