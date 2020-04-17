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
var _currentSlide, _imageURLs, _images;
// get all containers
const sliderItems = document.querySelectorAll(".random-slider_item");
class RandomImageGenerator {
    constructor() {
        _currentSlide.set(this, 0);
        _imageURLs.set(this, [
            "https://source.unsplash.com/1600x900/?nature,water",
            "https://source.unsplash.com/1600x900/?holiday",
            "https://source.unsplash.com/1600x900/?airplane",
            "https://source.unsplash.com/1600x900/?air",
            "https://source.unsplash.com/1600x900/?clouds",
            "https://source.unsplash.com/1600x900/?pilot",
            "https://source.unsplash.com/1600x900/?flying",
            "https://source.unsplash.com/1600x900/?jet",
            "https://source.unsplash.com/1600x900/?airplane",
            "https://source.unsplash.com/1600x900/?jets",
            "https://source.unsplash.com/1600x900/?boeing",
            "https://source.unsplash.com/1600x900/?airport",
            "https://source.unsplash.com/1600x900/?insurance",
            "https://source.unsplash.com/1600x900/?emotional",
            "https://source.unsplash.com/1600x900/?nature",
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
    setInterval() { }
}
_currentSlide = new WeakMap(), _imageURLs = new WeakMap(), _images = new WeakMap();
const generator = new RandomImageGenerator();
let slideInterval = () => setInterval(() => generator.nextSlide(), 5000);
slideInterval();
