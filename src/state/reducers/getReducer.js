import {
    GET_JOURNAL_DATA_SUCCESS,
    GET_JOURNAL_DATA_FAILURE
} from "../actions/getActions";

const initialState = {
    error: false
};

const reducer = (state = initialState, { type, payload }) => {
    const handlers = {
        [GET_JOURNAL_DATA_SUCCESS]: { ...state, data: payload }
    };
    return handlers[type] || state;
};

export default reducer;