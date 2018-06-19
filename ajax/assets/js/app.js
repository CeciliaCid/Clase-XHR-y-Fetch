const btn = document.querySelector("button"); //

const container = document.getElementById("root");
const userJson = "data/cohorts/lim-2018/users.json"

fetch(userJson)
//es la respuesta que yo estoy esperando en lo que yo estoy viendo, donde userjson
.then(response => response.json())
.then(data => {
    console.log(data);
    renderUsers(data);
    //puedo llamar esta funcion que escribi despues, porque data vive esperando una respuesta que esta
    //afuera, porque es asincrona
    //Va a funcionar cuando la respuesta llegue, mientras puedo seguir escribiendo codigo
    //
})

const renderUsers = data =>{
    btn.addEventListener("click", () => {
        const render = data.forEach(element => {
            return container.innerHTML += `<p>${element.name}</p>`
            //signo $ es igual que el + para concatenar y se llama destructuring
            // escribeme el element que se esta recorriendo junto con el parametro de name 
        })
        return render;
    })
}