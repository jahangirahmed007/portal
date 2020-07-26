const initState = {
    Agents: [],
    Errors: {}

}

export default function (state = initState, action) {
    switch (action.type) {
        case "GET_ERRORS": return {
            ...state,
            Errors: action.payload
        }

        default: return state

    }

}