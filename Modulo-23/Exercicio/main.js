document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.github.com/users/BrunoOliveira16';
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const userName = document.querySelector('#userName');
    const publicRepos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const userLink = document.querySelector('#link');
    const messageError = document.querySelector('#error');

    fetch(url)
        .then(function(response) {
            if(!response.ok) {
                throw new Error(`Ocorreu um erro: ${response.status}`);
            }
            return response.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url
            name.innerText = json.name;
            userName.innerText = `@${json.login}`;
            publicRepos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            userLink.href = json.html_url;
        })
        .catch(function(error) {
            if(error.message.includes('400')) {
                messageError.innerText = 'Erro 400: Requisição inválida';
            } else if (error.message.includes('500')) {
                messageError.innerText = 'Erro 500: Erro interno do servidor';
            } else {
                messageError.innerText = 'ocorreu um erro ao buscar o endereço, tente novamente mais tarde';
            }
        });
})