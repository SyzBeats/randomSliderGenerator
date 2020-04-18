// this file creates a random from 15 images and loads four of them into a slider

// get all containers
document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll<HTMLDivElement>(".random-slider_item");

  class RandomImageGenerator {
    #currentSlide: number = 0;

    #imageURLs: string[] = [
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
    ];

    //aray of 4 images
    #images: number[] = [];

    urls: string[] = [];

    constructor() {
      this.#currentSlide = 1;
      this.setImages();
      this.setURLs();
      this.setBackgroundImages();
      this.setCurrentSlide();
    }

    // method to select the random images
    private setImages() {
      for (let i = 0; i < this.#imageURLs.length; i++) {
        let index = Math.floor(Math.random() * 15);
        if (!this.#images.includes(index) && this.#images.length < 4) {
          this.#images.push(index);
          console.log(this.#images);
        }
      }
      if (this.#images.length < 4) {
        this.setImages();
      }
    }

    private setURLs(): void {
      for (let i = 0; i < this.#images.length; i++) {
        this.urls.push(this.#imageURLs[this.#images[i]]);
      }
    }

    setBackgroundImages(): void {
      for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.backgroundImage = `url(${this.urls[i]})`;
      }
    }

    setCurrentSlide() {
      sliderItems.forEach((item) => {
        if (parseInt(item.dataset.item) === this.#currentSlide) {
          item.dataset.type = "shown";
        } else if (parseInt(item.dataset.item) === this.#currentSlide + 1 || (parseInt(item.dataset.item) === 1 && this.#currentSlide + 1 === 5)) {
          item.dataset.type = "next";
        } else {
          item.dataset.type = "hidden";
        }
      });
    }

    nextSlide() {
      if (this.#currentSlide < 4) {
        this.#currentSlide++;
      } else {
        this.#currentSlide = 1;
      }
      this.setCurrentSlide();
    }

    // change Slide Method

    //method to set bg if items
  }

  const generator = new RandomImageGenerator();

  let slideInterval = () => setInterval(() => generator.nextSlide(), 5000);
  slideInterval();
});
