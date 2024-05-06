import { getDocks, getHaulingShips } from "./database.js"

const docks = getDocks()
const allHaulers = getHaulingShips()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "dock") {
        const dockId = itemClicked.dataset.id

        let haulingShips = [] // Array to store the names of hauling ships

        // Iterate through all hauling ships
        for (const hauler of allHaulers) {
            // Check if the current hauler is unloading at the dock associated with the clicked item
            if (parseInt(hauler.dockId) === parseInt(dockId)) {
                haulingShips.push(hauler.name) // Add the name of the hauling ship to the array
            }
        }

        // Generate the alert message based on the hauling ships at the dock
        let alertMessage = `${itemClicked.dataset.name} dock is currently unloading `
        if (haulingShips.length === 0) {
            alertMessage += "nothing."
        } else {
            alertMessage += haulingShips.join(", ")
        }

        window.alert(alertMessage)
    }
})

export const DockList = () => {
    let docksHTML = "<ul>"
    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}" data-type="dock" data-name="${dock.location}">${dock.location} dock can hold ${dock.volume} million tons of cargo</li>`;
        // Different format output: Shanghai, China dock can hold 43.5 million tons of cargo
    }
    docksHTML += "</ul>"

    return docksHTML
}

