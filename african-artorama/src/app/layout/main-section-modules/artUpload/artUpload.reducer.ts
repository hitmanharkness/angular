export const SET_PHOTO = 'Set Photo';
export const SET_INFO = 'Set Info';
export const SET_CATEGORY = 'Set Category';
export const SET_STATUS = 'Set Status';
export const SET_MATERIALS = 'Set Materials';
export const SET_PACKAGING = 'Set Packaging';
export const SET_SHIPPING = 'Set Shipping';
export const SET_PRICING = 'Set Pricing';

export function artUploadReducer(state = {}, action) {
    switch (action.type) {
        case SET_PHOTO:
            return Object.assign(state, { photo: action.payload });
        case SET_INFO:
            return Object.assign(state, { info: action.payload });
        case SET_CATEGORY:
            return Object.assign(state, { category: action.payload });
        case SET_STATUS:
            return Object.assign(state, { status: action.payload });
        case SET_MATERIALS:
            return Object.assign(state, { materials: action.payload });
        case SET_PACKAGING:
            return Object.assign(state, { packaging: action.payload });
        case SET_SHIPPING:
            return Object.assign(state, { shipping: action.payload });
        case SET_PRICING:
            return Object.assign(state, { pricing: action.payload });
        default:
            return state;
    }
}
