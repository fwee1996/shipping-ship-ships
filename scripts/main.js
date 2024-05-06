import { DockList } from "./Docks.js"
import { HaulersList } from "./Haulers.js"
import { ShipsList } from "./Ships.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping-ship-ships</h1>
<article class="details">
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__haulers">
        <h3>Haulers</h3>
        ${HaulersList()}
    </section>
    <section class="detail--column list details__ships">
        <h4>Ships</h4>
        ${ShipsList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML


// alt:
// let parentHTMLContainer=document.querySelector("#container")
//or:
// let parentHTMLContainer=document.getElementById("container")
//parentHTMLContainer.innerHTML=
// ${Docklist()} 
// ${Haulerlist()}
// ${Shiplist()}