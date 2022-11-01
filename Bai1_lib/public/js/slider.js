export default class Slider {
    #list;
    #containerName;
    #index = 0;

    constructor(data, containerName) {
        this.#list = data;
        this.#containerName = containerName;
    }

    get index() {
        return this.#index;
    }

    get length() {
        return this.#list.length;
    }

    show = () => {
        this.#initButton("left");
        this.#initSlide();
        this.#initButton("right");
        this.#initDots();
    };

    goToSlide = (index) => {
        $(`#slide${this.#index}`)
            .animate({ opacity: "0" }, "slow")
            .removeClass("active");
        $(`#dot${this.#index}`).removeClass("active");

        this.#index = +index;

        $(`#slide${this.#index}`)
            .animate({ opacity: "1" }, "slow")
            .addClass("active");
        $(`#dot${this.#index}`).addClass("active");
    };

    #initSlide = () => {
        $('<div id="slider" class="slider-inner"></div>').appendTo(
            this.#containerName
        );
        this.#list.forEach((item, index) => {
            $(`<div id="slide${index}" class="slide">
                <img src="${item.img}" />
                <div class="caption">${item.caption}</div>
            </div>`).appendTo(`${this.#containerName} #slider`);
        });
        $(`#slide${this.#index}`).addClass("active");
    };

    #initDots = () => {
        $("<div>", { id: "dot-container" }).appendTo(this.#containerName);
        $("<div>", { class: "dots" }).appendTo(
            `${this.#containerName} #dot-container`
        );
        this.#list.forEach((item, index) => {
            $(`<button class="dot" value="${index}">
                <i class="fa-solid fa-circle" id="dot${index}"></i>
            </button>`).appendTo(`${this.#containerName} #dot-container .dots`);
        });
        $(`#dot${this.#index}`).addClass("active");
    };

    #initButton = (direction) => {
        $(`<button type="button" class="arrow ${direction}">
            <i class="fa-solid fa-arrow-${direction} fa-2x"></i>
        </button>`).appendTo(this.#containerName);
    };
}
