window.addEventListener("load", function () {
    let container = document.querySelector(".image-row");
  
    let scrollAmount = 0;
  
    function slideImages() {
      scrollAmount += 2;
      container.scroll(scrollAmount, 0);
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    }
  
    let slideInterval = setInterval(slideImages, 60);
  
    container.addEventListener("mouseenter", function () {
      clearInterval(slideInterval);
    });
  
    container.addEventListener("mouseleave", function () {
      slideInterval = setInterval(slideImages, 50);
    });
  });

  