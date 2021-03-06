const initState = {
    isAuthenticated: false,
    user: ""
}

export default function (state = initState, action) {
    switch (action.type) {
        case "SET_CURRENT_USER": return {
            ...state,
            isAuthenticated: true,
            user: action.payload

        }
        case "LOGOUT_USER": return {
            ...state,
            isAuthenticated: false,
            user: ""
        }
        default:
            return state

    }

}

