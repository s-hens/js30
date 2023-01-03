//Debounce function from Wes
//Makes function on "scroll" event listener only run every 20 miliseconds, instead of constantly. Better for performance.
//Always debounce scroll functions!
//Run console.count(e) within checkSlide(e) to see this in action
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
        //window.scrollY is a property that tells us how many pixels we are scrolled down **at the top of the browser**
        //Thus window.scrollY + window.innerHeight = how many pixels to the bottom of the display
        //Thus slideInAt = when HALF of the sliderImage is peeking out onto the display
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //sliderImage.offsetTop is a property that tells us how far the top of the image is from the top of the browser
        //Thus imageBottom = Where is the bottom of the image on the screen?
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add("active");
        } else {
            sliderImage.classList.remove("active");
        }
    });
}

//Wrap the function in debounce()
window.addEventListener("scroll", debounce(checkSlide));