$(document).ready(function(){
    const slidesContainer = $("#slides-container ");
    const slide = document.querySelector(".slide-crosell ");
    const prevButton = $("#slide-arrow-prev ");
    const nextButton = $("#slide-arrow-next ");
     $("#slide-arrow-prev").click(function(){
        let slideWidth = $((".slide-crosell "));
        $("#slides-container ").scrollLeft()
     });
    nextButton.addEventListener("click ", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click ", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
})