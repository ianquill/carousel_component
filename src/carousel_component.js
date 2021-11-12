import lazyLoadImage from './lazyLoadImage';
import generateImage from './generateImage';
import getImageNames from './getImageNames';
import carouselStyle from './carousel_style.css';


class Carousel extends HTMLElement {
    constructor() {
        super();

        this.classList.add('carousel-component');


        // ** TEMP **
        this.img = generateImage(this, 'cat.jpg');
        this.img.classList.add('carousel-img');

        // creates an array of images
        this.images = getImageNames();
        this.currentIndex = 0;

        this.buttonLeft = document.createElement('input');
        this.buttonRight = document.createElement('input');
        this.buttonLeft.classList.add('carousel-button', 'carousel-overlay');
        this.buttonRight.classList.add('carousel-button', 'carousel-overlay');
        this.buttonLeft.id = 'carousel-leftbutton';
        this.buttonRight.id = 'carousel-rightbutton';
        this.buttonLeft.type = 'button';
        this.buttonRight.type = 'button';
        this.buttonLeft.value = '<';
        this.buttonRight.value = '>';
        this.buttonLeft.onclick = () => {
            // carousel select left
            this.shiftIndex(-1);
            this.refresh();
        }
        this.buttonRight.onclick = () => {
            // carousel select right
            this.shiftIndex(1);
            this.refresh();
        }

        // create indicators for image selection
        this.indicatorContainer = document.createElement('div');
        this.indicatorContainer.classList.add('carousel-overlay', 'carousel-indicator-container');
        this.images.forEach(image => {
            const indicator = document.createElement('input');
            indicator.type = 'button';
            indicator.classList.add(
                'carousel-button',
                // 'carousel-overlay',
                'carousel-indicator'
                );
                indicator.value = '.';
                indicator.onclick = () => {
                    this.clickIndicator(this.images.indexOf(image));
                };
                this.indicatorContainer.appendChild(indicator);        
        });
        this.indicators = this.indicatorContainer.querySelectorAll('input');
        
        this.append(this.buttonLeft, this.img, this.indicatorContainer, this.buttonRight);

        // ********* FUNCTION TO IMPORT ALL IMAGES *********
        // import(
        //     /* webpackPrefetch: true */
        //     './images'
        // ).then(images => console.log(images.default)).catch((err) => console.error(err));
        
        console.log('hello world');

    }

    refresh() {
        this.img.src = lazyLoadImage(this.images[this.currentIndex], this.img);
        this.clearIndicators();
        this.activateIndicator(this.indicators[this.currentIndex]); 
    }

    shiftIndex(arg) {
        this.currentIndex += arg;
        if (this.currentIndex > this.images.length-1) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0){
            this.currentIndex = this.images.length-1;
        }
        console.log(this.currentIndex);
    }

    clickIndicator(index) {
        this.currentIndex = index;
        this.refresh();
    }

    clearIndicators() {
        this.indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
    }

    activateIndicator(indicator) {
        indicator.classList.add('active');
    }

}

customElements.define('carousel-component', Carousel);

export default Carousel;