// this file creates a random from 15 images and loads four of them into a slider

// get all containers
document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll<HTMLDivElement>(".random-slider_item");

  class RandomImageGenerator {
    #currentSlide: number = 0;

    #imageURLs: string[] = [
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
  }

  const generator = new RandomImageGenerator();

  let slideInterval = () => setInterval(() => generator.nextSlide(), 5000);
  slideInterval();
});
