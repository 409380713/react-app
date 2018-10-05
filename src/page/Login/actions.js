export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export function updateUserMessage (data) {
    return {
        type:UPDATE_USER_MESSAGE,
        data
    }
}
export function requsetLogin (data) {
    return {
        type:REQUEST_LOGIN,
        data
    }
}