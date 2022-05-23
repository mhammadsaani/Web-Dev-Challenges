let btnTopLeft = document.getElementById("btn-top-left-el")
let btnTopRight = document.getElementById("btn-top-right-el")
let btnBottomLeft = document.getElementById("btn-bottom-left-el")
let btnBottomRight = document.getElementById("btn-bottom-right-el")


let characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "="]

function userInput(){
    return document.getElementById("userInput").value
}



function getRandomPassword(){
    let password = ""
    if (userInput()){
        for (let i = 0; i < userInput(); i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        return password
    }else{
        for (let i = 0; i < 15; i++){
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        return password
    }
}

function generatePasswords(){
    btnTopLeft.textContent = getRandomPassword()
    btnBottomLeft.textContent = getRandomPassword()
    btnTopRight.textContent = getRandomPassword()
    btnBottomRight.textContent =  getRandomPassword()
}

generatePasswords()