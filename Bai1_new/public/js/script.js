import { Slides as data } from "./dummyData.js";
import Slider from "./slider.js";

$(document).ready(function () {
    const slider = new Slider(data, "#slider-container");

    slider.show();

    $(".left").on("click", function () {
        slider.goToSlide((slider.index + slider.length - 1) % slider.length);
    });

    $(".right").on("click", function () {
        slider.goToSlide((slider.index + 1) % slider.length);
    });

    $(".dot").on("click", function () {
        slider.goToSlide(this.value);
    });
});
