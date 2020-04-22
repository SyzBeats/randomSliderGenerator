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
    var _baseUrl, _currentSlide, _imageURLs, _images;
    const sliderItems = document.querySelectorAll(".random-slider_item");
    class RandomImageGenerator {
        constructor() {
            _baseUrl.set(this, "http://dev.luftfahrtversicherung24.de");
            _currentSlide.set(this, 0);
            _imageURLs.set(this, [
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-motorflugzeug-d-mz-pixabay.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-motorflugzeug-chrombomber-pixabay.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-landebahn-thomas-ehrhardt-pixabay.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-helikopter-mauro-paillex-unsplash.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-flugzeug-hangar-billy-huynh-unsplash.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-cockpit-flugzeug-peter-h-pixabay-tiny.jpg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-cockpit.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-cessna.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-breisgauverein.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-ballon-s-s-unsplash.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-team-meeting.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-team-hangar.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-team-cessna2.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-team-cessna.jpeg`,
                `${__classPrivateFieldGet(this, _baseUrl)}/wp-content/uploads/2020/04/start-slider-segelflugzeug.jpeg`,
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
        evalCurrentURL() {
            // checks current URL
            let url = location.href;
            switch (true) {
                case url.includes("halterhaftpflicht"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("passagier"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("csl"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("kasko"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("hangar"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("sitzplatz"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("kriegs-haftpflicht"): {
                    console.log("lorem ipsum");
                    return;
                }
                case url.includes("kriegs-kasko"): {
                    console.log("lorem ipsum");
                    return;
                }
            }
        }
        // method to select the random images
        setImages() {
            for (let i = 0; i < __classPrivateFieldGet(this, _imageURLs).length; i++) {
                let index = Math.floor(Math.random() * 15);
                if (!__classPrivateFieldGet(this, _images).includes(index) && __classPrivateFieldGet(this, _images).length < 4) {
                    __classPrivateFieldGet(this, _images).push(index);
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
    _baseUrl = new WeakMap(), _currentSlide = new WeakMap(), _imageURLs = new WeakMap(), _images = new WeakMap();
    const generator = new RandomImageGenerator();
    let slideInterval = () => setInterval(() => generator.nextSlide(), 5000);
    slideInterval();
});
