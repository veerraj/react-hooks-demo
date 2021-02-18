import * as actionTypes from '../types/types'

export const createUser = (payload) => ({
    type: actionTypes.CREATE_USER,
    payload
})

export const updateUser = (payload) => ({
    type: actionTypes.UPDATE_USER,
    payload
})

export const deleteUser = (id) => ({
    type: actionTypes.DELETE_USER,
    id
})

export const setUser = (id) => ({
     type:actionTypes.SET_USER,
     id
})
