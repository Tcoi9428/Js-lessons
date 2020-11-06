let sliderWrapper  = document.querySelector('.slider-wrapper'),
    track          = sliderWrapper.querySelector('.slider-track'),
    items          = track.querySelectorAll('.slider-item'),
    btnPrev        = sliderWrapper.querySelector('.slider-controls .prev'),
    btnNext        = sliderWrapper.querySelector('.slider-controls .next'),
    currentElement = 1,
    slideWidth   = 1200;

    checkSliderControls();

btnNext.addEventListener('click', function() {
    slider(+1);
});

btnPrev.addEventListener('click', function() {
    slider(-1);
});


function slider(ElementIndex) {

    let predictedElementIndex = currentElement + ElementIndex;

    if (predictedElementIndex < 1 || predictedElementIndex > items.length) {
        return true;
    }

    currentElement = predictedElementIndex;

    checkSliderControls();

    let newMarginLeft = -1 * (currentElement - 1) * slideWidth;

    track.style.transform = 'translateX(' + newMarginLeft + 'px)';
}


function checkSliderControls() {
    if (currentElement == items.length) {
        btnNext.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
    }

    if (currentElement == 1) {
        btnPrev.classList.add('disabled');
    } else {
        btnPrev.classList.remove('disabled');
    }
}
/*Клонирование слайдов*/
// function cloneCreator(items){
//         items.forEach(function(item){
//            let clone =   item.cloneNode(true);
//                clone.classList.add('clone');
//             track.after(clone);
//         });
// }