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
 