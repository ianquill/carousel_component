import lazyLoadImage from './lazyLoadImage';

const generateImage = (container, imageName) => {
    const img = document.createElement('img');
    container.appendChild(img);

    lazyLoadImage(imageName, img);

    // ******* testing *******
    // make sure this doesn't introduce
    // any bugs in the future
    return img;
};

export default generateImage;