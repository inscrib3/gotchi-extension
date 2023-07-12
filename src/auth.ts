import { constants } from "./constants"
import { render as renderGotchi } from "./gotchi"

export const render = (element: HTMLElement) => {
    element.innerHTML = `<div id="container">
    <img src="logo.png" width="300" />
    <input type="text" id="gotchi" placeholder="Gotchi ID" />
    <button type="submit" id="submit">Play</button>
    <hr />
    <button type="button" id="mint">Mint</button>
    </div>`

    console.log(JSON.stringify({ gotchiId: 'anonym', action: 'just arrived' }))
  
    document.getElementById('submit')!.onclick = () => {
      const gotchi = (<HTMLInputElement>document.getElementById(constants.keys.gotchi)).value
      localStorage.setItem(constants.keys.gotchi, gotchi)
      console.log(JSON.stringify({ gotchiId: gotchi, action: 'play attempt' }))
      renderGotchi(element)
    }

    document.getElementById('mint')!.onclick = () => {
      window.open(constants.ordinals.minting, '_blank')
    }
}
