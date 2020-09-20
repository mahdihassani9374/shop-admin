import { SET_LOADING } from './../actionTypes';

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: {
        loading
    }
});