const initState:StateType = {
    themeId: 1,
}
export type StateType={
    themeId: number
}
export type changeThemeIdAT=ReturnType<typeof changeThemeId>
export type ActionType=changeThemeIdAT
export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number)=> ({ type: 'SET_THEME_ID', id }) as const // fix any
