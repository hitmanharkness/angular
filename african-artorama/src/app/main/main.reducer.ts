import { ObjectHelper } from '../../Helpers/ObjectHelper';

export const ADD_FILTER = 'add Filter';
export const REMOVE_FILTER = 'remove Filter';

export const START_STATE = { Name: '', Price: '', Color: null };

export function reducer(state = START_STATE, action) {
    switch (action.type) {
        case ADD_FILTER:
            ObjectHelper.CopyAllProperties(action.payload, state);
            return state;
        case REMOVE_FILTER:
            delete state[action.payload];
            return state;
        default:
            return state;
    }
}
