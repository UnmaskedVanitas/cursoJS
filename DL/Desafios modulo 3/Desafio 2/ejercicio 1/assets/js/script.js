let bordeImg = document.querySelector("#bordeImg");
bordeImg.addEventListener("click", () => {
    if (bordeImg.style.borderStyle != "solid") {
        bordeImg.style.border = "2px solid red";
    } else {
        bordeImg.style.removeProperty("border");
    }

});