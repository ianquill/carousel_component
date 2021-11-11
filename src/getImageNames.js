const getImageNames = () => {
    const r = require.context('./images', false, /\.jpg$/);

    const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);

    return importAll(r);
};

export default getImageNames;