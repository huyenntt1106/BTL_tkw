$(document).ready(function() {
    var crosell = 0;
    var $slidesContainer = $("#slides-container");
    var widthAllCrossell = $slidesContainer.width(); // Corrected selector with '#'

    $("#slide-arrow-prev").click(function() {
        let slideWidth = $(".slide-crosell").width() * 3;
        crosell -= slideWidth;

        // Ensure crosell does not go below zero
        if (crosell < 0) {
            crosell = 0;
        }

        $slidesContainer.scrollLeft(crosell);
    });

    $("#slide-arrow-next").click(function() {
        let slideWidth = $(".slide-crosell").width() * 3;
        crosell += slideWidth;

        // Ensure crosell does not exceed the maximum scrollable width
        let maxScroll = $slidesContainer[0].scrollWidth - $slidesContainer.width();
        if (crosell > maxScroll) {
            crosell = maxScroll;
        }

        $slidesContainer.scrollLeft(crosell);
    });
});
