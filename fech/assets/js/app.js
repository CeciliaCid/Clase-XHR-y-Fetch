const inputText = document.querySelector("input")
const containerTitle = document.getElementById("title")
const containerYear = document.getElementById("year")
const containerRuntime = document.getElementById("runtime")
const containerImage = document.getElementById("img")
// 

inputText.addEventListener("keypress", (event) => {
    //which y keyCode son eventos del teclado
    let key = event.which || event.keyCode;
    //el codigo de enter es 13 
    if (key === 13) {
        let movie = inputText.value;
        console.log(movie)
        inputText.value = "";

        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=abbc867c`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
})

const renderInfo = data => {
    containerTitle.innerHTML = data.Title;
    containerYear.innerHTML = data.Runtime;
    containerImage.innerHTML = `<img src="${data.Poster}">`;
}