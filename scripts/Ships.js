import { getHaulingShips, getShippingShips } from "./database.js"

const ships = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a shipping ship list item clicked?
        if(itemClicked.dataset.type==="shipping ship"){
            // Get the haulerId value of the shipping ship clicked
            //Note: keep data attribute name lowercase!!! bcs thats what shows in Element>Properties in devtools
            //<li data-haulersidforeignkey="3" data-type="shipping ship">Esso Atlantic</li>

            const haulerId = itemClicked.dataset.haulersidforeignkey

           // console.log("Clicked Hauler ID:", haulerId)--to check

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            const allHaulers=getHaulingShips()
            // Iterate the array of hauler objects
            for (const hauler of allHaulers){
            // Does the haulerId foreign key match the id of the current hauler?

            console.log("Current Hauler ID:", hauler.id)

                if (parseInt(hauler.id) === parseInt(haulerId)){
            // Reassign the value of `haulingShip` to the current hauler
                haulingShip=hauler
            
                }
                    
            }
            window.alert(`${itemClicked.textContent} is being hauled by ${haulingShip.name}`)
        }
        // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
       
    }

)


export const ShipsList = () => {

   // const ships = getShippingShips()--moved to top

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        //keep data attribute name lowercase!!!
        shipsHTML+=`<li data-haulersidforeignkey="${ship.haulerId}" data-type="shipping ship">${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}