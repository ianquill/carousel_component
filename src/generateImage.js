import lazyLoadImage from './lazyLoadImage';

const generateImage = (container, imageName) => {
    const img = document.createElement('img');
    container.appendChild(img);

    lazyLoadImage(imageName, img);
};

export default generateImage;