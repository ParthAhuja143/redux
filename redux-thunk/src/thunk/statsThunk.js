import { loadImageStats, setImageStats, setImageStatsErrors } from "../actions";
import { fetchImageStats } from "../api";

function handleStatsRequest(id) {
  return async function (dispatch, getState) {
    dispatch(loadImageStats(id));
    const state = getState();
    console.log("Fetching stats for: ", id, state);
    for (let i = 0; i < 3; i++) {
      try {
        const response = await fetchImageStats(id);
        dispatch(setImageStats(id, response.downloads.total));
        console.log("Stats fetched for: ", id, state);
        return;
      } catch (error) {}
    }

    dispatch(setImageStatsErrors(id));
    console.log("Erro in loading stats for: ", id, state)
  };
}

export { handleStatsRequest };
