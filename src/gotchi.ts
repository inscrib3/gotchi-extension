import { constants } from "./constants";

export const render = (element: HTMLElement) => {
    const gotchi = localStorage.getItem(constants.keys.gotchi)
    element.innerHTML = `<iframe height="550px" width="100%" src="${constants.ordinals.content}/${gotchi}" frameborder="0" />`
}
