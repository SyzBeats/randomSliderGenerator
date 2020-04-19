// this file creates a random from 15 images and loads four of them into a slider
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
// get all containers
document.addEventListener("DOMContentLoaded", function () {
    var _currentSlide, _imageURLs, _images;
    const sliderItems = document.querySelectorAll(".random-slider_item");
    class RandomImageGenerator {
        constructor() {
            _currentSlide.set(this, 0);
            _imageURLs.set(this, [
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-motorflugzeug-d-mz-pixabay.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-motorflugzeug-chrombomber-pixabay.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-landebahn-thomas-ehrhardt-pixabay.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-helikopter-mauro-paillex-unsplash.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-flugzeug-hangar-billy-huynh-unsplash.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-cockpit-flugzeug-peter-h-pixabay-tiny.jpg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-cockpit.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-cessna.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-breisgauverein.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-ballon-s-s-unsplash.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-team-meeting.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-team-hangar.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-team-cessna2.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-team-cessna.jpeg",
                "http://dev.luftfahrtversicherung24.de/wp-content/uploads/2020/04/start-slider-segelflugzeug.jpeg",
            ]);
            //aray of 4 images
            _images.set(this, []);
            this.urls = [];
            __classPrivateFieldSet(this, _currentSlide, 1);
            this.setImages();
            this.setURLs();
            this.setBackgroundImages();
            this.setCurrentSlide();
        }
        // method to select the random images
        setImages() {
            for (let i = 0; i < __classPrivateFieldGet(this, _imageURLs).length; i++) {
                let index = Math.floor(Math.random() * 15);
                if (!__classPrivateFieldGet(this, _images).includes(index) && __classPrivateFieldGet(this, _images).length < 4) {
                    __classPrivateFieldGet(this, _images).push(index);
                    console.log(__classPrivateFieldGet(this, _images));
                }
            }
            if (__classPrivateFieldGet(this, _images).length < 4) {
                this.setImages();
            }
        }
        setURLs() {
            for (let i = 0; i < __classPrivateFieldGet(this, _images).length; i++) {
                this.urls.push(__classPrivateFieldGet(this, _imageURLs)[__classPrivateFieldGet(this, _images)[i]]);
            }
        }
        setBackgroundImages() {
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItems[i].style.backgroundImage = `url(${this.urls[i]})`;
            }
        }
        setCurrentSlide() {
            sliderItems.forEach((item) => {
                if (parseInt(item.dataset.item) === __classPrivateFieldGet(this, _currentSlide)) {
                    item.dataset.type = "shown";
                }
                else if (parseInt(item.dataset.item) === __classPrivateFieldGet(this, _currentSlide) + 1 || (parseInt(item.dataset.item) === 1 && __classPrivateFieldGet(this, _currentSlide) + 1 === 5)) {
                    item.dataset.type = "next";
                }
                else {
                    item.dataset.type = "hidden";
                }
            });
        }
        nextSlide() {
            if (__classPrivateFieldGet(this, _currentSlide) < 4) {
                __classPrivateFieldSet(this, _currentSlide, +__classPrivateFieldGet(this, _currentSlide) + 1);
            }
            else {
                __classPrivateFieldSet(this, _currentSlide, 1);
            }
            this.setCurrentSlide();
        }
    }
    _currentSlide = new WeakMap(), _imageURLs = new WeakMap(), _images = new WeakMap();
    const generator = new RandomImageGenerator();
    let slideInterval = () => setInterval(() => generator.nextSlide(), 5000);
    slideInterval();
});
