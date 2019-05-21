import { createSelector } from 'reselect'


const displayButtonLoader = (state) => {
    return state.generalReducer.display_button_loader
}


export const displayButtonLoaderSelector = createSelector(
    [displayButtonLoader],
    (items) => items
)



