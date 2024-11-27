function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
// This function will show the reaction section after the button is clicked
function showReactions() {
    document.getElementById("reactionSection").style.display = "block";
}

// This function will hide the reaction section when the Close button is clicked
function closeReactions() {
    document.getElementById("reactionSection").style.display = "none";
}