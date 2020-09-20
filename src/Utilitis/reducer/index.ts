import { SET_LOADING } from '../actionTypes';

export interface InitModel {
    Loading: boolean
}
const initData: InitModel = {
    Loading: true
}

const commentReducer = (state: any = initData, action: any) => {
    switch (action.type) {
        case SET_LOADING: return setLoading;
        default : return state
    }
}

const setLoading = (state: any, payload: any) => {
    return {
        ...state,
        Loading: payload.loading
    }
}

export default commentReducer;