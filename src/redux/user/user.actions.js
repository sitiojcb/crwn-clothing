import { UserActionTypes } from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user 
})
//con esto creamos nuestra accion