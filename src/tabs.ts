import { constants } from "./constants"
import { render as renderGotchi } from "./gotchi"
import { render as renderCollection } from "./collection"
import { render as renderInscribe } from "./inscribe"

export const render = (element: HTMLElement) => {
    // url search params
    const params = new URLSearchParams(window.location.search)
    const tab = params.get('tab')

    if (tab) {
        localStorage.setItem(constants.keys.tab, tab)
    }

    const activeTab = (() => {
        const tab = localStorage.getItem(constants.keys.tab)
        return parseInt(tab || '0')
    })()

    element.innerHTML = `<div id=app>
<div id=tab></div>
<div id=tabs>
<a href="?tab=0" style="${activeTab === 0 && 'text-decoration: underline' }">Gotchi</a>
<a href="?tab=1" style="${activeTab === 1 && 'text-decoration: underline' }">Collection</a>
<a href="${constants.ordinals.minting}" style="${activeTab === 2 && 'text-decoration: underline' }" target=_blank>Minting</a>
<a href="?tab=3" style="${activeTab === 3 && 'text-decoration: underline' }">Inscrib3</a>
<a href="?tab=4" style="color: blue; ${activeTab === 4 && 'text-decoration: underline' }">N3XT</a>
</div>
</div>`

    if (activeTab === 0) {
        renderGotchi(document.getElementById('tab')!)
    }

    if (activeTab === 1) {
        renderCollection(document.getElementById('tab')!)
    }

    if (activeTab === 3) {
        renderInscribe(document.getElementById('tab')!)
    }

    if (activeTab === 4) {
        document.getElementById('tab')!.innerHTML = `<div style="height: 550px; text-align: center"><img style="margin: 150px auto; height: 200px; display: inline-block; animation: shake 1s; animation-iteration-count: infinite;" src="egg.png" /></div>`
    }
    
}
