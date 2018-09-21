export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR'
export function onRequestStart (data) {
    return {
        type:REQUEST_START,
        data
    }
}
export function onRequestSuccess (data) {
    return {
        type:REQUEST_SUCCESS,
        data
    }
}
export function  onRequestError(data) {
    return {
        type:REQUEST_ERROR,
        data
    }
}