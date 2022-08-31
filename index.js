
  
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    
    count = count + 1

    countEl.textContent = count
    
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
    console.log(count)
}