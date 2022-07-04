const peopleInput = document.querySelector(".js-people")
const resetBtn = document.querySelector(".reset-btn")
const billInput = document.querySelector(".js-bill")
const buttons = document.querySelectorAll(".btn")
const total = document.querySelector(".js-total")
const tip = document.querySelector(".js-tip")
const billWarn = document.querySelector(".bill-warn")
const peopleWarn = document.querySelector(".people-warn")
const tipInputs = document.querySelector(".js-tips")
const customInput = document.querySelector(".custom")

let tipPercentage = null

resetBtn.addEventListener("click", resetCalculator)

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let element = e.currentTarget
        buttons.forEach(item => {
            if(item !== element) item.classList.remove("active")
        })
        element.classList.add("active")
        tipPercentage = element.value
        if(customInput.value) customInput.value = ""
    })
})
customInput.addEventListener("input", () => {
    tipPercentage = customInput.value / 100
    buttons.forEach(btn => {
        btn.classList.remove("active")
    })
})

billInput.addEventListener("input", () => {
    let billValue = billInput.value
    let peopleValue = peopleInput.value
    billInput.classList.remove("wrong")
    billWarn.classList.add("hide")
    if(peopleValue === ""  || Number(peopleValue) <= 0){
        peopleInput.classList.add("wrong")
        peopleWarn.classList.remove("hide")
    }
    if(peopleValue === "" || Number(peopleValue) <= 0){
        total.textContent = '0.00'
        return
    }
    if(billValue && peopleValue && tipPercentage){
        let tipAmount = (billValue / peopleValue * tipPercentage).toFixed(2)
        let totalAmount = (billValue / peopleValue).toFixed(2)
        tip.textContent = tipAmount
        total.innerHTML = tipAmount + totalAmount
    }
    if(billValue && peopleValue){
        total.textContent = eval(billValue / peopleValue).toFixed(2)
    }
})

peopleInput.addEventListener("input", () => {
    let peopleValue = peopleInput.value
    let billValue = billInput.value
    peopleInput.classList.remove("wrong")
    peopleWarn.classList.add("hide")
    if(billValue === ""  || Number(billValue) <= 0){
        billInput.classList.add("wrong")
        billWarn.classList.remove("hide")
    }
    if(peopleValue === "" || Number(peopleValue) <= 0){
        total.textContent = '0.00'
        return
    }
    if(billValue && peopleValue && tipPercentage){
        let tipAmount = (billValue / peopleValue * tipPercentage).toFixed(2)
        let totalAmount = (billValue / peopleValue).toFixed(2)
        tip.textContent = tipAmount
        total.innerHTML = tipAmount + totalAmount
    }
    if(billValue && peopleValue){
        total.innerHTML = eval(billValue / peopleValue).toFixed(2)
    }
})

function resetCalculator() {
    tip.textContent = `0.00`
    total.textContent = `0.00`
    billInput.value = ""
    customInput.value = ""
    peopleInput.value = ""
    tipPercentage = ""
    buttons.forEach( btn => {
        btn.classList.remove("active")
    })
}