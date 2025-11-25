import './style.css';
const frame = document.querySelector(".slider_frame");
const slides = document.querySelectorAll(".carousel_image_holder");
const slideArr = [...slides];
let currentSlideIndex = 0;
frame.addEventListener("click", (e)=>{
    switch (e.target.dataset.action) {
        case "scroll_left":
            if(currentSlideIndex !== 0){
                currentSlideIndex--;
                slideArr[currentSlideIndex].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center'
                })
                break;
            } else {
                break;
            }
        case "scroll_right":
            if(currentSlideIndex !== 4){
                currentSlideIndex++;
                slideArr[currentSlideIndex].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center'
                })
                break;
            } else {
                break;
            }
    }
})