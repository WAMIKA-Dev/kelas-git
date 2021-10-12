const kotak = document.getElementById("kotak")
const button = document.getElementById("putar")

button.addEventListener('click', () =>{
    kotak.classList.toggle("animasi")
    let text = button.innerHTML === "Putar" ? "Stop" : "Putar"
    button.innerHTML = text
})