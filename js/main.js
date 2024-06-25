let games = document.querySelectorAll(".game-list p")
function completed(event){
    event.currentTarget.classList.toggle("completed")
}

for (let i = 0; i < games.length; i++){
    console.log(games[i])
    games[i].addEventListener("click", completed)
}


let btnA = document.querySelector("#add") 
let gameList = document.querySelector(".game-list")
let inputText = document.querySelector(".add-game")
function game_add(){
    let newGame = document.createElement("p")
    let gameName = document.querySelector(".add-game").value
    newGame.innerHTML = gameName
    gameList.appendChild(newGame)
    inputText.value = ""
    newGame.addEventListener("click", completed)
}
btnA.addEventListener("click", game_add)


let btnD = document.querySelector("#delete")
function game_delete(){
    let completedGames = document.querySelectorAll(".completed")
    for (let i = 0; i < completedGames.length; i++){
        completedGames[i].remove()
    }
} 
btnD.addEventListener("click", game_delete)