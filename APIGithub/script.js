const mostrarTela = document.querySelector('#container')

var frase = ''

const APIGithub = () => {
    fetch('https://api.github.com/users/UraFabio/followers')
    .then(response => response.json()) // ARRAY / OBJECT
    .then(data => {
        data.forEach(follower => {
            frase += `<p class="quadrado"><span>ID: ${follower.id}</span> <span>Login: ${follower.login}</span> <img src="${follower.avatar_url}" ></p>`
        })
        mostrarTela.innerHTML = frase
    })
}

APIGithub()