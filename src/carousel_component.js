import(
    /* webpackPrefetch: true */
    './images'
).then(images => console.log(images.default)).catch((err) => console.error(err));

// function importAll(r) {
//     const images = {};
//     r.keys().map((item, index) => { 
//         images[item.replace('./', '')] = r(item); 
//     });
//     return images;
// }
// const imageCache = importAll(require.context('./images', true, /\.jpg\.JPG\.svg\.png$/));

class Carousel extends HTMLElement {
    constructor() {
        super();
        
        console.log('hello world');

    }
}

customElements.define('carousel-component', Carousel);

export default Carousel;