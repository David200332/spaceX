import { types } from "./types";

export const setData = data => ({
    type: types.SET_DATA,
    payload: [...data],
})

export const updateBoxes = boxesData => ({
    type: types.UPDATE_BOXES,
    payload: {
        id: boxesData.id,
        boxes: boxesData.boxes
    },
})

export const updateActive = id => ({
    type: types.UPDATE_ACTIVE,
    payload: id,
})

export const updateSearchValue = searchValue => ({
    type: types.UPDATE_SEARCH_VALUE,
    payload: searchValue,
})