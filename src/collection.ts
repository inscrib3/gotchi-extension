import { constants } from "./constants";

export const render = (element: HTMLElement) => {
    element.innerHTML = `<iframe height="550px" width="100%" src="${constants.gotchi.collection}" frameborder="0" />`
}
