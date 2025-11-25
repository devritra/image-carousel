import './style.css';
const frame = document.querySelector('.slider_frame');
const slides = document.querySelectorAll('.carousel_image_holder');
const slideArr = [...slides];
const sliderDots = document.querySelectorAll('.slider_dot');
const sliderDotArr = [...sliderDots];

let currentSlideIndex = 0;
frame.addEventListener('click', (e) => {
    if (e.target.dataset.action) {
        if (e.target.dataset.action === 'scroll_left') {
            if (currentSlideIndex !== 0) {
                currentSlideIndex--;
                slideArr[currentSlideIndex].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                });
                sliderDotArr[targetDotIndex].style.background = '';
                targetDotIndex = currentSlideIndex;
                sliderDotArr[targetDotIndex].style.background = 'white';
                return;
            } else {
                return;
            }
        }
    }
    if (!e.target.dataset.action) {
        let navBtn = e.target.closest('button');
        if (navBtn) {
            if (navBtn.dataset.action === 'scroll_left') {
                if (currentSlideIndex !== 0) {
                    currentSlideIndex--;
                    slideArr[currentSlideIndex].scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                    });
                    sliderDotArr[targetDotIndex].style.background = '';
                    targetDotIndex = currentSlideIndex;
                    sliderDotArr[targetDotIndex].style.background = 'white';
                    return;
                } else {
                    return;
                }
            }
        }
    }
    if (e.target.dataset.action) {
        if (e.target.dataset.action === 'scroll_right') {
            if (currentSlideIndex !== 4) {
                currentSlideIndex++;
                slideArr[currentSlideIndex].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                });
                sliderDotArr[targetDotIndex].style.background = '';
                targetDotIndex = currentSlideIndex;
                sliderDotArr[targetDotIndex].style.background = 'white';
                return;
            } else {
                return;
            }
        }
    }
    if (!e.target.dataset.action) {
        let navBtn = e.target.closest('button');
        if (navBtn) {
            if (navBtn.dataset.action === 'scroll_right') {
                if (currentSlideIndex !== 4) {
                    currentSlideIndex++;
                    slideArr[currentSlideIndex].scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center',
                    });
                    sliderDotArr[targetDotIndex].style.background = '';
                    targetDotIndex = currentSlideIndex;
                    sliderDotArr[targetDotIndex].style.background = 'white';
                    return;
                } else {
                    return;
                }
            }
        }
    }
});

const sliderDotsHolder = document.querySelector('.slider_dot_holder');
let targetDotIndex = 0;
sliderDotArr[targetDotIndex].style.background = 'white';
sliderDotsHolder.addEventListener('click', (e) => {
    if (e.target.dataset.action) {
        sliderDotArr[targetDotIndex].style.background = '';
        targetDotIndex = sliderDotArr.findIndex((dot) => {
            return dot.dataset.action === e.target.dataset.action;
        });
        sliderDotArr[targetDotIndex].style.background = 'white';
        slideArr[targetDotIndex].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        });
    }
});
