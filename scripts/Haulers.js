import { getHaulingShips, getShippingShips } from "./database.js"

const haulers = getHaulingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?--if statement!
        if  (itemClicked.dataset.type==="hauler"){
        
            // Get the id of the hauler clicked
            //---Debug starts next line on DevTools go to sources>scripts>haulers>look at Scope tab
            const haulerId =itemClicked.dataset.id
             // Start a counter variable at 0
             let counter = 0
             // Iterate all of the shipping ships        
            const allShips = getShippingShips()
            for (const ship of allShips) {
                // Does the haulerId foreign key match the id?
                if (ship.haulerId === haulerId) {
                    // Increase the counter by 1
                    counter++
                }
            }

            // Display the number of shipping ships carried by the hauler
            window.alert(`This hauler is carrying ${counter} shipping ship(s).`)
        }
    }
)

export const HaulersList = () => {
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-type="hauler">${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}
