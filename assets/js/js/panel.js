const arrow = document.querySelector('.arrow div')
const pannel = document.querySelector('.left')
arrow.addEventListener('click', () => {
    if(pannel.classList.contains('l-hide')) {
        pannel.classList.remove('l-hide')
        arrow.style.transform = "rotate(0deg)"
    } else {
        pannel.classList.add('l-hide')
        arrow.style.transform = "rotate(-180deg)"
    }
})

const inputCatIndexes = {
    0: "subways",
    1: "hospitals",
    2: "banks",
    3: "apartment-buildings",
    4: "apartments",
    5: "pd-stations",
    6: "yachts",
    7: "others",
    8: "resouces",
    9: "item-spawns",
    10: "greenhouses",
    11: "farmhouses",
    12: "gas-stations",
    13: "hangars",
    14: "mansions",
    15: "garages",
    16: "one-story-houses",
    17: "two-story-houses",
    18: "shops",
    19: "food-shops",
    20: "illegal-npcs",
    21: "players-shops",
    22: "checkpoints",
    23: "berries",
}
const layerCat = [...document.querySelectorAll(".wrapper>div")]
console.log(layerCat)
const inputCat = [...document.querySelectorAll("input:checked")]
// console.log(inputCat);
inputCat.forEach((inputCatItem, i) => {
    // console.log(inputCatItem.getAttribute("checked"))
    // console.log(inputCatItem.checked, "start")
    inputCatItem.addEventListener('click', () => {
        if (!inputCatItem.checked) {
            inputCatItem.setAttribute("checked", "false")
            // console.log(inputCatItem.checked, "off")
            // console.log(inputCatItem.getAttribute("id"))
            console.log(layerCat[i])
            console.log(layerCat[i].classList.contains(`layer_${inputCatIndexes[i]}`))
            layerCat[i].classList.add("off")
        } else {
            inputCatItem.setAttribute("checked", "true")
            layerCat[i].classList.remove("off")
            // console.log(inputCatItem.checked, "on")
        }
    })
})
 