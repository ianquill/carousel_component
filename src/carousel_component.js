import lazyLoadImage from './lazyLoadImage';
import generateImage from './generateImage';
import getImageNames from './getImageNames';
import carouselStyle from './carousel_style.css';


class Carousel extends HTMLElement {
    constructor() {
        super();

        this.classList.add('carousel-component');

        // ********** todo **************
        // -- make an array, get image names of all, individually load the current one being presented
        // -- create buttons in constructor

        this.img = generateImage(this, 'cat.jpg');
        this.img.classList.add('carousel-img');
        
        this.appendChild(this.img);

        // ********* FUNCTION TO IMPORT ALL IMAGES *********
        // import(
        //     /* webpackPrefetch: true */
        //     './images'
        // ).then(images => console.log(images.default)).catch((err) => console.error(err));
        
        console.log('hello world');

    }
}

customElements.define('carousel-component', Carousel);

export default Carousel;