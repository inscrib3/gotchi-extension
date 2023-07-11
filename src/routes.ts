import { constants } from "./constants"
import { render as renderTabs } from "./tabs"
import { render as renderAuth } from "./auth"

export const render = () => {
    const gotchi = localStorage.getItem(constants.keys.gotchi)
  
    if (gotchi) {
        renderTabs(document.body)
    } else {
        renderAuth(document.body)
    }
}