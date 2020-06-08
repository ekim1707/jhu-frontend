import api, { authHeaders } from "../../config";

export const GET_JOURNAL_DATA_SUCCESS = "GET_JOURNAL_DATA_SUCCESS";
export const GET_JOURNAL_DATA_FAILURE = "GET_JOURNAL_DATA_FAILURE";

export const getJournalData = () => (dispatch) => {
    fetch(`${api}`, {
        method: "GET",
        headers: authHeaders()
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_JOURNAL_DATA_SUCCESS,
                payload: data
            });
        })
        .catch((e) => {
            dispatch({
                type: GET_JOURNAL_DATA_FAILURE,
                payload: e
            })
        });
};