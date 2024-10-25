const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const list = document.querySelector(".list")


submit.addEventListener("click", ()=>{
    console.log(input.value)
    const li = document.createElement("li")
    li.textContent = input.value
    list.appendChild(li)
    input.value = ""
})
