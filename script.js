console.log("Personal website loaded successfully!");
function openImage(imageSource) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImage").src = imageSource;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}