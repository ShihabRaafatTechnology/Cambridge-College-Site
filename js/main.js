
// Original Image (Declaration)
var originalImage = document.getElementsByClassName("pop-up"),
    i;

// Modal (Declarations)
var modal = document.getElementById("main-modal"),
    icon = document.getElementsByClassName("close")[0],
    modalImage = document.getElementById("modal-content"),
    caption = document.getElementsByClassName("caption")[0];

// When Click On Original Image
for (i = 0; i < originalImage.length; i++)
{
    originalImage[i].addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.src;
        caption.innerHTML = this.alt;
    });
}

// When Click On Close Icon
icon.onclick = function () {
    modal.style.display = "none";
}

// When Click esc (Key) Close Modal
document.onkeydown = function (e)
{
    if (e.keyCode == "27")
        modal.style.display = "none";
}

// Declaration
var changeImg = document.querySelector(".slider"),
    imgs = ["img/main_house.jpg", "img/slideTwo.jpg", "img/slideThree.jpg", "img/slideFour.jpg"],
    i = 0;
var currentClass = document.querySelectorAll(".header .slider .intro ul li");
// Slides
function slides() {
    // Get Images From Array And Put On Background Image
    changeImg.style.backgroundImage = "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(\'" + imgs[i] + "\')";
    // Remove Class (active) Attribute
    currentClass[i].removeAttribute("class");
    if (i < imgs.length -1)
        i++;
    else
        i = 0;
    // Add Class (active) Attribute
    currentClass[i].setAttribute("class","active");
    // Replay Function After 2.5 sec
    setTimeout("slides()", 2500);
}
slides();