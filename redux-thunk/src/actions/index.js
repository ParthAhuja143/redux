import { IMAGE, STATS } from "../constants";

const loadImages = () => ({
    type: IMAGE.LOAD
});

const setImages = (images) => ({
    type: IMAGE.LOAD_SUCCESS,
    images: images
});

const setImagesErrors = (errors) => ({
    type: IMAGE.LOAD_FAIL,
    errors: errors
});

const loadImageStats = (id) => ({
    type: STATS.LOAD,
    id: id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id: id,
    downloads: downloads,
});

const setImageStatsErrors = (id) => ({
    type: STATS.LOAD_FAIL,
    id: id,
})


export {loadImages, setImages, setImagesErrors, loadImageStats, setImageStats, setImageStatsErrors};