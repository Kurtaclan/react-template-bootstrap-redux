export default function callApi(method, endpoint, action) {
    return fetch(endpoint + action, {
        method
    })
}