let myEmojis = []
const nameInput = document.getElementById("name-input")
const setName = document.getElementById("set-name")
const setNameBtn = document.getElementById("set-name-btn")



if (JSON.parse(localStorage.getItem("myEmojis") !== '[]')){
    myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
}else{
    localStorage.setItem("myEmojis", `["👨‍💻", "⛷", "🍲"]`)
    myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
}

setNameBtn.addEventListener('click', function(){
    console.log(nameInput.value)
    storingNameInLocalStorage(nameInput.value)
    if (nameInput.value){
        setName.textContent = ` ${nameInput.value}'s Emoji`
        nameInput.value = ""
    }
})


function storingNameInLocalStorage(value){
    if (value){
        localStorage.setItem("name", `${value}'s Emoji`)
    }
}

function getNameFromLocalStorage(){
    const name = localStorage.getItem("name")
    setName.textContent = ` ${name}`
    nameInput.value = ""
}

getNameFromLocalStorage()



function renderEmojis() {
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
        myEmojis.push(emojiInput.value)
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        emojiInput.value = ""
        renderEmojis()
    }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
        myEmojis.unshift(emojiInput.value)
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        emojiInput.value = ""
        renderEmojis()
    }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
    myEmojis.pop()
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myEmojis = JSON.parse(localStorage.getItem("myEmojis"))
    myEmojis.shift()
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis()
})