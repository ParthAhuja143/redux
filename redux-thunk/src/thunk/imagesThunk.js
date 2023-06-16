import { setImagesErrors, setImages, loadImages } from "../actions";
import { fetchImages } from "../api";
import { handleStatsRequest } from "./statsThunk";

function handleImageLoad(){
    return async function (dispatch, getState){
        dispatch(loadImages());
        const state = getState();
        console.log('Fetching Images...', state);
        try {
            const images = await fetchImages(state.nextPage);
            dispatch(setImages(images));
            console.log('Images fetched', state)
            for(let i = 0 ; i < images.length ; i++){
                dispatch(handleStatsRequest(images[i].id));
            }
        } catch (error) {
            dispatch(setImagesErrors(error.toString()));
            console.log('Images can\'t be fetched', state)
        }
    }
}

export {handleImageLoad};