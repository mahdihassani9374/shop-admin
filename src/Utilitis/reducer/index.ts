import { SET_LOADING } from '../actionTypes';

export interface InitModel {
    Loading: boolean
}
const initData: InitModel = {
    Loading: false
}

const commentReducer = (state: any = initData, action: any) => {
    console.log(state, action);
    switch (action.type) {
        case SET_LOADING: setLoading(state, action.payload);
        default: return state
    }
}

const setLoading = (state: any, payload: any) => {
    return {
        ...state,
        Loading: payload.loading
    }
}

export default commentReducer;