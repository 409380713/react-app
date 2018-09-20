export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
export function updateUserMessage (data) {
    return {
        type:UPDATE_USER_MESSAGE,
        data
    }
}