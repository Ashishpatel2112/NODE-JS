let iID, currentSlide = 1, totalSlides = 3;

const SlideShow = (run) => (
  run ?
    (iID = setInterval(() => {
      currentSlide = (currentSlide % totalSlides) + 1;
      document.querySelector('#slide_' + currentSlide).checked = true;  
    }, 2000)) :
    clearInterval(iID)
);

const autoSlideShow = (checkbox) => SlideShow(checkbox.checked);

const onSlideChange = (button) => {
  currentSlide = button.id.substring(6);
  play = document.querySelector('#play');
  // turn off the slide show when user manually changes slide
  if (play.checked) {
    SlideShow(false);
    play.checked = false;
    // Force reflow to ensure the unchecked state is immediately processed
    void play.offsetWidth;
    play.checked = true;
    SlideShow(true);
  }
}