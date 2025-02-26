const slider = document.querySelector(".slider");
    const upButton = document.getElementById("scrollUp");
    const downButton = document.getElementById("scrollDown");
    
    let index = 0;
    const totalImages = document.querySelectorAll(".slider li").length;
    const imageHeight = 400; // Same as li height

    function scrollUp() {
        if (index > 0) {
            index--;
            slider.style.transform = `translateY(-${index * imageHeight}px)`;
        }
    }

    function scrollDown() {
        if (index < totalImages - 1) {
            index++;
            slider.style.transform = `translateY(-${index * imageHeight}px)`;
        }
    }

    upButton.addEventListener("click", scrollUp);
    downButton.addEventListener("click", scrollDown);